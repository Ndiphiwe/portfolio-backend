const express = require('express')
const app = express.Router()
const fixArrayId = require('../helpers')

let projects = [
    {
        id: 1,
        title: "Calculator",
        github: "https://github.com/Ndiphiwe?tab=repositories",
        netlify: "https://app.netlify.com/teams/ndiphiwe/sites",
        img: "https://picsum.photos/200"
    },
    {
        id: 2,
        title: "BMI Calculator",
        github: "https://github.com/Ndiphiwe?tab=repositories",
        netlify: "https://app.netlify.com/teams/ndiphiwe/sites",
        img: "https://picsum.photos/200"
    },
    {
        id: 3,
        title: "Reaction Timer",
        github: "https://github.com/Ndiphiwe?tab=repositories",
        netlify: "https://app.netlify.com/teams/ndiphiwe/sites",
        img: "https://picsum.photos/200"
    },
    {
        id: 4,
        title: "vue-cli-calc",
        github: "https://github.com/Ndiphiwe?tab=repositories",
        netlify: "https://app.netlify.com/teams/ndiphiwe/sites",
        img: "https://picsum.photos/200"
    },
    {
        id: 5,
        title: "Shoo_shop ",
        github: "https://github.com/Ndiphiwe?tab=repositories",
        netlify: "https://app.netlify.com/teams/ndiphiwe/sites",
        img: "https://picsum.photos/200"
    },
]

app.get('/', (req, res) => {
    res.send(projects)
})


app.get('/:id', (req, res) => {
    const project = projects.find(project => project.id === req.params.id)
    if(!project) res.status(404).send({msg: "project not found"})
    res.send(project)
})


app.post('/', (req, res) => {
    let {title, img, github, netlify} = req.body;
    if(!title || !img|| !github|| !netlify)
    res.status(400).send({msg: "Some information missing"})

    let newProject = {
        id: projects.length + 1,
        title, 
        github,
        netlify,
    };
    projects.push(newProject)
    res.send(newProject)
})


app.patch('/:id', (req, res) => {
    let project = projects.findIndex((project) => project.id == req.params.id);
    if(!project) res.status(404).send({msg: "Some information missing"})
    let {title, img, github, netlify} = req.body;

    if(title) project.title = title;
    if(github) project.github = github;
    if(netlify) project.netlify = netlify;
    if(img) project.img = img;
    req.send(project)
})


app.delete('/:id', (req, res) => {
    projects = projects.filter((project) => project.id != req.params.id);
    fixArrayId(projects);
    res.send({msg: "Item deleted"});
})

module.exports = app