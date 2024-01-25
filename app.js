const express = require('express')
const app = express()
const port = 3000
const bcrypt = require('bcryptjs')
const Controller = require('./controllers/allContoller')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => { // langsung redirect ke home/landing page ***bahas belakangan
  res.send('Hello World!')
})

app.get('/register', Controller.registerForm)

app.post('/register', Controller.registerPost)

app.get('/login', Controller.loginForm)

app.post('/login', Controller.postLogin)

app.get('/userProfile', (req, res) => { // display profile user
  res.send('Hello World!')
})

app.get('/courses', (req, res) => { // display courses
  res.send('Hello World!')
})

app.get('/categories', (req, res) => { // display categories ***jika mau dan diperlukan
  res.send('Hello World!')
})

// sementara begini, lanjut diskusi nanti pagi


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})