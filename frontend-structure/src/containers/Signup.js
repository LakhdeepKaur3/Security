import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';


class Signup extends Component {
    state ={user : {
        name: {
            value: '',
            showError: false,
            msg: ''
        },
        password: {
            value: '',
            showError: false,
            msg: ''
        },
        cpassword: {
            value: '',
            showError: false,
            msg: ''
        }
    },
    disableBtn : true};
    
    componentDidMount() {
        this.setState({signUpClicked:false});
    }
    updateModel(property, e) {
        console.log(arguments);
        var user = {...this.state.user};
        var btnDisable = true;
        user[property].value = e.target.value;
        
        if (property == "password" || property == "cpassword") {

            if (user.cpassword.value.length > 0 && user.password.value.length == 0) {
                user.password.showError = true;
                user.password.msg = 'Password Can not be  Empty';
            }
            else if (user.cpassword.value.length > 0 && user.password.value.length > 0) {
                if (user.cpassword.value == user.password.value) {
                    if(this.state.user.name.value.length > 0){
                        btnDisable = false;
                    }
                    else{
                        btnDisable = true;
                    }
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

            this.setState({
                user,
                disableBtn:btnDisable
            });

        }
        this.setState({
            signUpClicked:false
        });

        console.log(user);
    }
    sumbitUser =()=> {
        console.log(this.props);
        this.setState({signUpClicked:true});
        this.props.registerUser(this.state.user.name.value,this.state.user.password.value);
    }
    render() {
        return (
            <div>
                <h1>Register here</h1>
                <label>
                      User Name:
                        <input type="text" onChange={this.updateModel.bind(this, 'name')} />
                </label>
                <br />
                <label>
                    Password:
                        <input type="password" onChange={this.updateModel.bind(this, 'password')} />
                    <div style={{ display: this.state.user.password.showError ? "block" : "none" }}>
                        {this.state.user.password.msg}
                    </div>
                </label>
                <br />
                <label>
                    Confirm Password:
                        <input type="password" onChange={this.updateModel.bind(this, 'cpassword')} />
                    <div style={{ display: this.state.user.cpassword.showError ? "block" : "none" }}>
                        {this.state.user.cpassword.msg}
                    </div>
                </label>
                <br />
                <button disabled={this.state.disableBtn} onClick={this.sumbitUser}>Register</button>
                { this.state.signUpClicked }
                <h1 style={{display:this.state.signUpClicked && (!this.props.auth.authorized )
                    ?"block":"none",
                        color:this.props.auth.error?"red":"green"
                    }}>
                {
                        this.props.auth.message
                }
                </h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        auth:state.auth
    }
}

const mapDispatchToProps = dispatch => {

    return {
       registerUser: (userName,password) => dispatch(actions.registerUser(userName,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)