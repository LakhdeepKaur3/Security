var orm = require('orm');

const AdminModel = (db,models,next)=>{
    /*
    insert into admins values('shubham','','rawat',21,'male','sf@dfd.com','123434343','dfdf dfdf ','prerak','dfdf','3232323',2);
   insert into admins values('prerak','pratap','singh',21,'male','smdn@dfd.com','123434343','dfdf dfdf ','_rdf','dfdf','323274323',3);
   
   
   
    */
    models.admin = db.define("admins",{
        firstName:String,
        middleName:String,
        lastName:String,
        age:Number,
        gender:String,
        emailId:String,
        mobileNo:String,
        fullAddress:String,
        userName:String,
        password:String,
        aadhaarNo:String
    },{
        methods:{
            fullName: function(){
                return this.firstName + " " + (this.middleName? this.middleName+" ":'')+ this.lastName;
            }
        }
    });
    next();
}

module.exports = AdminModel;