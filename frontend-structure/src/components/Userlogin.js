import React, { Component } from 'react';

class LoginPage extends Component {
   constructor(){
       super();
      
       this.state={
           email:"",
           password:""
       };  

this.handleChamge=this.handleChamge.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
   }

   handleChamge(e) {
       let target = e.target;
       let value= target.type ==="checkbox" ? target.checked : target.value;
       let name = target.name;

       this.setState({
           [name]:value
       });

   }

   handleSubmit(e){
 e.preventDefault();


 console.log("this form was submitted by the following data:");
 console.log(this.state);
   }


    render() {
        return (
            <div className="loginbackground">
            <div className="loginbox">
            <div> <img src='../images/login.png' className="login"/>
            </div>
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
                <p> User name</p>
                <input type="text"  placeholder="Enter Username" name="email" value={this.state.email} onChange={this.handleChamge} 
                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="must be type proper mail address" required/>
                <p> Password</p>
                <input type="password"  placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChamge}
                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter,
                and at least 8 or more characters" required/>
                <button type="submit" className="btn btn-primary">Sign In</button>
                <a href="#"> Forgot your password </a><br/>
                <a href="#"> Don't have an account </a>
                </form>
        
            </div>
            </div>
        );
    }
}

export default LoginPage;