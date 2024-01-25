// const express = require('express')
// const app = express()
// const port = 3000
// const bcrypt = require('bcryptjs')

// app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended:true}))

// app.get('/', (req, res) => { // langsung redirect ke home/landing page ***bahas belakangan
//   res.send('Hello World!')
// })

// app.get('/register', (req, res) => { // page untuk daftar user (form)
//   res.send('Hello World!')
// })

// app.post('/register', (req, res) => { // redirect untuk log in
//   res.send('Hello World!')
// })

// app.get('/login', (req, res) => { // page untuk log in
//   res.send('Hello World!')
// })

// app.post('/login', (req, res) => { // redirect landing page/home ***bahas belakangan
//   res.send('Hello World!')
// })

// app.get('/userProfile', (req, res) => { // display profile user
//   res.send('Hello World!')
// })

// app.get('/courses', (req, res) => { // display courses
//   res.send('Hello World!')
// })

// app.get('/categories', (req, res) => { // display categories ***jika mau dan diperlukan
//   res.send('Hello World!')
// })

// // sementara begini, lanjut diskusi nanti pagi


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require("express");
const app = express();
const port = 3000;


app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}));
const controller = require("./controllers/controller");

app.get("/", controller.profile)
app.get("/course", controller.course)

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});

