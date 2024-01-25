const express = require('express')
const app = express()
const port = 3000
const bcrypt = require('bcryptjs')
const Controller = require('../controllers/controller')
const session = require('express-session')
const route = express.Router()



route.get('/register', Controller.registerForm)
route.post('/register', Controller.registerPost)

route.get('/login', Controller.loginForm)
route.post('/login', Controller.postLogin)
route.get('/logout', Controller.getLogout)

route.get("/", Controller.profile)
route.get("/course", Controller.course)
route.get("/course/delete/:id", Controller.deleteCourse)
route.get("/course/edit/:id", Controller.editCourse)
route.post("/course/edit/:id", Controller.postEditCourse)



// app.get('/userProfile', (req, res) => { // display profile user
//   res.send('Hello World!')
// })

// app.get('/courses', (req, res) => { // display courses
//   res.send('Hello World!')
// })

// app.get('/categories', (req, res) => { // display categories ***jika mau dan diperlukan
//   res.send('Hello World!')
// })

// app.set("view engine", "ejs")
// app.use(express.urlencoded({extended:false}));
// const controller = require("./controllers/allContoller");

// app.get("/", controller.profile)
// app.get("/course", controller.course)
// app.get("/course/delete/:id", controller.deleteCourse)
// app.get("/course/edit/:id", controller.editCourse)
// app.post("/course/edit/:id", controller.postEditCourse)


// app.listen(port, () =>{
//     console.log(`Example app listening on port ${port}`);
// });

module.exports = route