// const express = require('express')
// const app = express()
// const port = 3000
// const bcrypt = require('bcryptjs')
// const Controller = require('./controllers/allContoller')

// app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended:true}))

// app.get('/', (req, res) => { // langsung redirect ke home/landing page ***bahas belakangan
//   res.send('Hello World!')
// })

// app.get('/register', Controller.registerForm)

// app.post('/register', Controller.registerPost)

// app.get('/login', Controller.loginForm)

// app.post('/login', Controller.postLogin)

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
const port = 3005;


app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}));
const controller = require("./controllers/allContoller");

app.get("/", controller.profile)
app.get("/course", controller.course)
app.get("/course/delete/:id", controller.deleteCourse)
app.get("/course/edit/:id", controller.editCourse)
app.post("/course/edit/:id", controller.postEditCourse)


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});