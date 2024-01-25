const {User, Profile, sequelize} = require('../models/index')
const bcrypt = require('bcryptjs')

class Controller {

    static async registerForm(req, res) {
        try {
            res.render('registerPage')
        } catch (error) {
            res.send(error) 
        }
    }
    
    static async registerPost(req, res) {
        try {
            const {email, password, role} = req.body
            await User.create({email, password, role})
            // console.log(req.body)
            res.redirect('/login')
        } catch (error) {
            console.log(error)
            res.send(error) 
        }
    }

    static async loginForm(req, res) {
        try {
            res.render('loginPage')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async postLogin(req, res) {
        const {email, password} = req.body
        console.log(email, password)
        try {
            const user = await User.findOne({
                where: { email: email }
            });

            if(user) {
                const validPassword = bcrypt.compareSync(password, hash.password)

                if(validPassword) {
                    return res.redirect('/')
                } else {
                    const error = 'Invalid Password'
                    return res.redirect(`/login/?error=${error}`)
                }
            } else {
                const error = 'Invalid Username or Password'
                return res.redirect(`/login/?error=${error}`)
            }
        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    }

}

module.exports = Controller