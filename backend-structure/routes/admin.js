var express = require('express');
var router = express.Router();


router.get('/adminList', function (req, res, next) {
    sendAdminList(req, res,{});
});

const sendAdminList = (req,res,appendedData)=>{
    req.models.admin.find({},function(err,admins){
        if(err){
            console.log(err);
          return res.json({
            message:"Error while fetching Records",
            error:true,
            ...appendedData
        });
        }
        else{
          return res.json({"adminList":admins.map((admin)=>{
              return {name:admin.fullName(),
                     userName:admin.userName,
                     gender:admin.gender,
                     email:admin.emailId,
                     mobileNo:admin.mobileNo,
                     fullAddress:admin.fullAddress
            }
          }),
          ...appendedData
        });
        }
    });

    
}

router.delete("/admin",function(req,res,next){
    var userName = req.query.userName;
    req.models.admin.find({userName},function(err,admins){
        console.log(admins);
        if(admins.length == 1){
            console.log(admins[0]);
            admins[0].remove(function(err,admin){
                if(err){
                    res.json({
                        message:"Error deleting admin",
                        error:true
                      });
                      
                }
                else{
                    console.log("i am here");
                      sendAdminList(req,res,{
                        error:false,
                        message:"Deleted Admin Successfully."
                    });
                   
                }
            });            
        }
        else if(admins.length == 1){

        
            res.json({
                message:"Record does not exist.",
                error:true
              });
              
        }
        else{
            res.json({
                message:"Record duplication",
                error:true
              });
        }
    });
})

module.exports = router;