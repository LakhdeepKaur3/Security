import React, { Component } from 'react';
import NumberFormat from 'react-number-format';


class AddAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      middlename: "",
      lastname: "",
      age: "",
      gender: "",
      email: "",
      contact: "",
      address: "",
      username: "",
      password:  {
        value: '',
        showError: false,
        msg: ''
    },
    cpassword: {
      value: '',
      showError: false,
      msg: ''
  },

      aadhar: "",
      disableBtn :true
      
    }

  }

 

  change = (e) => {
    var state=this.state;
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  updateModel(property, e) {
   // console.log(arguments);
    var user = {password:{...this.state.password},cpassword:{...this.state.cpassword}};
    var btnDisable = true;
    user[property].value = e.target.value;
  if (property == "password" || property == "cpassword") {

    if (user.cpassword.value.length > 0 && user.password.value.length == 0) {
        user.password.showError = true;
        user.password.msg = 'Password Can not be  Empty';
    }
    else if (user.cpassword.value.length > 0 && user.password.value.length > 0) {
        if (user.cpassword.value == user.password.value) {
            btnDisable = false;
            user.password.showError = false;
            user.cpassword.showError = false;
        }
        else {
            btnDisable = true;
            user.password.showError = false;
            user.password.msg = '';
            user.cpassword.showError = true;
            user.cpassword.msg = 'Password do not Match';
        }
    }

    }
    this.setState({
      password:user.password,
      cpassword:user.cpassword,
      disableBtn:btnDisable
  });
}
  onSubmit = (e) => {
    
    // console.log(e.target);//.checkValidity());
    if(this.refs.form.checkValidity() == true){
      
      e.preventDefault();
      console.log(this.state);
    }
    else{   
  }}
  
  

  

  render() {
    

    return (
      <div className="container">
        <h1 style={{paddingLeft:"200px"}}>ADMIN</h1><br/>
        <form className="form-horizontal" ref="form">
          
            <div className="form-group row">
              <label className="control-label col-sm-2"> Name:</label>
              <input autocomplete="off" type="text" name="firstname" style= {{width:"220px"}} value={this.state.firstname} className="form-control" placeholder="FirstName"
                onChange={e => this.change(e)} required="true"/>
              <input type="text" autocomplete="off" name="middlename"  style= {{width:"220px"}} value={this.state.middlename} className="form-control" placeholder="MiddleName"
                onChange={e => this.change(e)} />
              <input type="text" autocomplete="off" name="lastname" style= {{width:"220px"}} value={this.state.lastname} className="form-control" placeholder="LastName"
                onChange={e => this.change(e)} />
            </div>
            <div className="form-group row">    
            <label className="control-label col-sm-2"> Age:</label>
            <NumberFormat autocomplete="off" format="###" name="age" style= {{width:"220px"}} value={this.state.age} className="form-control" placeholder="Age" onChange={e => this.change(e)} required="true" />
            </div>
            <div className="form-group row">
            <label className="control-label col-sm-2"> Gender:</label>
            <div class="form-check form-check-inline">
            <label className="radio-inline">
              <input type="radio" autocomplete="off" name="gender"  value={this.state.gender} onChange={e => this.change(e)}required="true" />Male
                        </label>
            </div>
            <div class="form-check form-check-inline">
            <label className="radio-inline">
              <input type="radio" name="gender" autocomplete="off" value={this.state.gender} onChange={e => this.change(e)} required="true" />Female
                        </label><br /><br />
            </div>
            </div>
            <div className="form-group row">
            <label className="control-label col-sm-2 ">Email-Id*</label>
            <input type="email" autocomplete="off" style= {{width:"220px"}} name="email" value={this.state.email} className="form-control"
             placeholder="Enter email" onChange={e => this.change(e)} required="true" /><br /><br />
            </div> 
            <div className="form-group row">
            <label className="control-label col-sm-2" >Contact-No:</label>
            <NumberFormat autocomplete="off"format="##########" name="contact" style= {{width:"220px"}} value={this.state.contact} className="form-control" placeholder="Enter your mobile No"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              onChange={e => this.change(e)} required="true" /><br /><br />
            </div>
            <div className="form-group row">
            <label className="control-label col-sm-2">Address:</label>
            <textarea type="text" name="address" autocomplete="off" style= {{width:"320px",
            height:'100px'  
          }} value={this.state.address} className="form-control" placeholder="Enter your Address"
              onChange={e => this.change(e)} required="true"/><br /><br />
            </div>
            <div className="form-group row">
            <label className="control-label col-sm-2">UserName:</label>
            <input type="alphanumeric" name="username" autocomplete="off" style= {{width:"220px"}} value={this.state.username} className="form-control" placeholder="Username"
              onChange={e => this.change(e)} required="true"/><br /><br />
            </div>
            <div className="form-group row">
            <label className="control-label col-sm-2">Password:</label>
            <input type="password" name="password" autocomplete="off" style= {{width:"220px"}}   className="form-control" placeholder="Password"
              onChange={e => this.change(e)}required="true" onChange={this.updateModel.bind(this, 'password')} /><br /><br />
               <div style={{ display: this.state.password.showError ? "block" : "none" }}>
                              {this.state.password.msg}
                          </div>
            </div>
            <div className="form-group row">
            <label className="control-label col-sm-2">Confirm-Password:</label>
            <input type="password" name="confirm_password" autocomplete="off" style= {{width:"220px"}} value={this.state.confirm_password} className="form-control" placeholder="Retype your Password"
              onChange={this.updateModel.bind(this, 'password')}required="true" onChange={this.updateModel.bind(this, 'cpassword')} /><br /><br />
              <div style={{ display: this.state.cpassword.showError ? "block" : "none" }}>
                              {this.state.cpassword.msg}
                          </div>
            </div>
            <div className="form-group row">
            
            <label className="control-label col-sm-2">Aadhar-No:</label>
            <NumberFormat autocomplete="off" format="#### #### #### ####" type="text" name="aadhar" autocomplete="off" style= {{width:"220px"}} value={this.state.aadhar} className="form-control" placeholder="Enter your Aadhar No"
              pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
              onChange={e => this.change(e)} required="true"/> <br /><br />
            </div>
            <div className="form-group row justify-content-md-center">
              <div className="col-sm-2 ">
              <button disabled={this.state.disableBtn}  onClick={e => this.onSubmit(e)}  type="submit" name="submit" className="btn center-block">SUBMIT</button>
              </div>
            </div>
        </form>


      </div>

    );
  }
}

export default AddAdmin;