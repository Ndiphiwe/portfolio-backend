const express = require('express')
const app = express.Router()
const fixArrayId = require('../helpers')

let testimonials = [
    {
        id: 1,
        name: "Godwin",
        message: "Nam mattis lacus pharetra ultrices tempus. In rutrum eros non ex pharetra aliquet. Duis consequat consequat nisi, id tempus nulla semper in. Vestibulum commodo ultricies mi, ut bibendum diam rutrum ut. ",
        img: "https://picsum.photos/200"
    },
    {
        id: 2,
        name: "Alex",
        message: "Nam mattis lacus pharetra ultrices tempus. In rutrum eros non ex pharetra aliquet. Duis consequat consequat nisi, id tempus nulla semper in. Vestibulum commodo ultricies mi, ut bibendum diam rutrum ut. ",
        img: "https://picsum.photos/200"
    },
    {
        id: 3,
        name: "Enosh",
        message: "Nam mattis lacus pharetra ultrices tempus. In rutrum eros non ex pharetra aliquet. Duis consequat consequat nisi, id tempus nulla semper in. Vestibulum commodo ultricies mi, ut bibendum diam rutrum ut. ",
        img: "https://picsum.photos/200"
    },
    {
        id: 4,
        name: "Hannah",
        message: "Nam mattis lacus pharetra ultrices tempus. In rutrum eros non ex pharetra aliquet. Duis consequat consequat nisi, id tempus nulla semper in. Vestibulum commodo ultricies mi, ut bibendum diam rutrum ut. ",
        img: "https://picsum.photos/200"
    },
    {
        id: 5,
        name: "Tursha",
        message: "Nam mattis lacus pharetra ultrices tempus. In rutrum eros non ex pharetra aliquet. Duis consequat consequat nisi, id tempus nulla semper in. Vestibulum commodo ultricies mi, ut bibendum diam rutrum ut. ",
        img: "https://picsum.photos/200"
    },
    {
        id: 5,
        name: "Zharne",
        message: "Nam mattis lacus pharetra ultrices tempus. In rutrum eros non ex pharetra aliquet. Duis consequat consequat nisi, id tempus nulla semper in. Vestibulum commodo ultricies mi, ut bibendum diam rutrum ut. ",
        img: "https://picsum.photos/200"
    }
]

app.get('/', (req, res) => {
    res.send(testimonials)
})


app.get('/:id', (req, res) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id)
    // console.log(testimonial)
    if(!testimonial) res.status(404).send({msg: "testimonial not found"})
    res.send(testimonial)
})


app.post('/', (req, res) => {
    let {name, img, message} = req.body;
    if(!name || !img|| !message)
    res.status(404).send({msg: "Some information missing"})

    let newtestimonial = {
        id: testimonials.length + 1,
        name, 
        message,
    };
    testimonials.push(newtestimonial)
    res.send(newtestimonial)
})


app.patch('/:id', (req, res) => {
    let testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if(!testimonial) res.status(404).send({msg: "Some information missing"})
    let {name, img, message} = req.body;

    if(name) testimonial.name = name;
    if(message) testimonial.message = message;
    if(img) testimonial.img = img;
    req.send(testimonial)
})


app.delete('/:id', (req, res) => {
    testimonials = testimonials.filter((testimonial) => testimonial.id != req.params.id);
    fixArrayId(testimonial);
    res.send({msg: "Item deleted"});
})

module.exports = app