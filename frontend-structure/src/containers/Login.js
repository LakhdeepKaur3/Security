import React, { Component } from 'react';
import  {connect} from 'react-redux';
import Alert from 'react-bootstrap/lib/Alert';
import * as actions from '../store/actions';


class Login extends Component{
   componentDidMount(){
      
   }
   state = {
       user:{
           userName:{
               value:'',
               error:false
           },  
           password:{
            value:'',
            error:false
        }
       },
       disable:true,
       loginClicked:false
   }
   updateModel = (property,e)=> {
       var user = {...this.state.user};
       console.log(property);
       user[property].value = e.target.value;
       var disable = true;
       if(this.state.user[property].value.length == 0){
            user[property].error = true;
       }
       else if(this.state.user.userName.value.length > 0 && this.state.user.password.value.length > 0){
            user[property].error = false;
            disable = false
       }
       else{
            user[property].error = false;
       }
       this.setState({
           user,
           disable,
           loginClicked:false
       });
   }
   loginUser = ()=>{
       this.setState({loginClicked:true});
        this.props.loginUser(this.state.user.userName.value,this.state.user.password.value);
   }
    render(){
        return (

            <div>
                <Alert style={{display:this.state.loginClicked && (this.props.auth.authorized||this.props.auth.error)
                    ?"block":"none",
                        color:this.props.auth.error?"red":"green"
                    }}>
                {
                        this.props.auth.message
                }
                </Alert>
                <h1>Login 
                </h1>
                <label>
                    User Name:
                    <input type="text" onChange={this.updateModel.bind(this, 'userName')} />
                    <div style={{ display: this.state.user.userName.error ? "block" : "none" }}>
                        Can not be Empty
                    </div>
                </label>
                <br/>
                <label>
                    Password:
                        <input type="password" onChange={this.updateModel.bind(this, 'password')} />
                    <div style={{ display: this.state.user.password.error ? "block" : "none" }}>
                        Can not be Empty
                    </div>
                </label> 
                <br/>
                <button onClick={this.loginUser} disabled={this.state.disable}>
                    Login
                </button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log("state",state)
    return {
        auth:state.auth
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        loginUser: (userName,password) => dispatch(actions.loginUser(userName,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)