//############################### KD #############################
import React from 'react';
import {Link} from 'react-router-dom';




class Header extends React.Component{

    render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" role="navigation" id="HeaderNav">
            
            <div className="logo">
                Dream Security
            </div>

            <div className="nav navbar-nav flex-row justify-content-between ml-auto">
               <span className="font-weight-bold" id="TagineHeader">Secure your Home with our Dream Security</span>
            </div>

            <div className="nav navbar-nav flex-row justify-content-between ml-auto">   
                <Link to="/Userlogin" className="btn btn-dark">Login</Link>    
            </div>
            <div>
                <Link to="/Userlogin"></Link>
            </div>
           
        </nav>
    )
}}


export default Header;