import React, { Component } from 'react';
import { Jumbotron, Grid, Col, Row, Image, Button } from 'react-bootstrap';



class Registrationform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      contact: "",
      error: false,
    }

  }


  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {

    console.log(e.target);
    if (this.refs.form.checkValidity() == true) {
      e.preventDefault();
    }
    else {
    }
    console.log(this.state);
  }


  //   clearMessage =()=>{
  //     setTimeout(function(){
  //         this.setState({
  //             error:false

  //         })

  //     }.bind(this),3000)
  // }

  //   handlesubmit=(event) =>{
  //     event.preventDefault();
  //     let contact=this.state.contact;
  //     let regex = ^\(\d{3}\)\s\d{3}-\d{4};
  //     if(regex.test(contact)){
  //         console.log(contact)
  //     }
  //     else
  //     {
  //         this.setState({error:true})
  //     }
  //     this.clearMessage()
  // }




  render() {
    return (
      <Grid>

        <div class="xerox">

          <h1>CONTACT US</h1>

          <form className="form-horizontal" ref="form">
            {/* <div className="form-inline"> */}
              <b><label className="control-label col-sm-0" style={{marginLeft:"18px"}}> Name</label></b><br/>
              <input type="text" name="firstname" style={{ width: "220px", marginLeft: "18px" }} value={this.state.firstname} className="form-control" placeholder="FullName"
                onChange={e => this.change(e)} required="true" />

              {/* <input type="text" name="lastname" style={{ width: "220px" }} value={this.state.lastname} className="form-control" placeholder="LastName"
                onChange={e => this.change(e)} required="true" /> */}
            {/* </div> */}

            <div className="form1-inline">
              <b> <label className="control-label col-sm-0 ">Email-Id</label></b>
              <input type="email" style={{ width: "220px" }} name="email" value={this.state.email} className="form-control"
                placeholder="Enter email" onChange={e => this.change(e)} required="true" />
            </div>

            <div className="form2-inline">
              <b><label className="control-label col-sm-0" >Contact-No</label></b>
              <input type="tel" autocomplete="tel" name="contact" style={{ width: "220px" }} value={this.state.contact} class="form-control" placeholder="Enter your mobile No"
                onChange={e => this.change(e)} required="true" /><br /><br />
            </div>

            <div className="submit1">
              <div className="submit">
                <b><button onClick={e => this.onSubmit(e)} type="submit" name="submit"
                  className="btn center-block">SUBMIT</button></b>
              </div>
            </div>
          </form>


        </div>

      </Grid>

    );
  }
}

export default Registrationform;