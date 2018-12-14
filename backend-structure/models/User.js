var orm = require('orm');

const UserModel = (db,models,next)=>{
    models.user = db.define("users",{
        userName:String,
        hashedPassword:String
    });
    next();

}

module.exports = UserModel;