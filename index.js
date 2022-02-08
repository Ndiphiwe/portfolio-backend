const express = require('express')
const projectRoutes = require('./routes/projectsRoutes')
const testimonialRoutes = require('./routes/testimonialsRoutes')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "Welcome to my backend"})
})
app.use("/projects", projectRoutes)
app.use("/testimonials", testimonialRoutes)

app.listen(8000)