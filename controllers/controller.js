const {Profile, sequelize} = require("../models/index")

class controller{
    static async Meme(req, res) {
        try {
          const userProfile = await Profile.findAll();
          res.render("userProfile", { userProfile });
        } catch (error) {
          res.send(error);
        }
      }
    }
