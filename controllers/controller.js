const {Profile, sequelize} = require("../models/index")

class controller{
    static async profile(req, res) {
        try {
          const userProfile = await Profile.findAll();
          res.render('user-Profile', { userProfile });
        } catch (error) {
          res.send(error);
        }
      }
      static async course(req, res) {
        try {
          const userProfile = await Profile.findAll();
          res.render('user-Profile', { userProfile });
        } catch (error) {
          res.send(error);
        }
      }
    }

module.exports = controller
