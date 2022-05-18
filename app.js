const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { restart } = require('nodemon');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1> esta es mi primera app web express  </h1>')
})

app.post('/register', (req, res) => {
  let name = req.body.name;
  let apellido = req.body.apellido
  let email = req.body.email
  let ciudad = req.body.ciudad
  let domicilio = req.body.domicilio
  let password = req.body.password;
  res.send(`Su nombre es: ${name},su apellido es: ${apellido}, su Email es: ${email}, ciudad: 
  ${ciudad},su domicilio es: ${domicilio} y su password es: ${password}`)
})

app.post(`/login`, (req, res) => {
  let email = req.body.email
  let password = req.body.password;
  res.send(`su Email es: ${email} y su password es: ${password}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

