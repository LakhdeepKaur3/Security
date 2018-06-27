import React, { Component } from 'react';
import './App.css';
import {Route, Switch,NavLink, Redirect,withRouter} from 'react-router-dom';
import AuthorList from './containers/AuthorList';
import Signup from './containers/Signup';
import Home from './components/Home';
import AdminList from './containers/AdminList';
import {connect} from 'react-redux';
import Login from './containers/Login';
import Admin from './components/Admin';
import * as actions from './store/actions';

const PrivateRoute = ({ component: Component,isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/signup' />
  )} />
);
const OpenRoute = ({ component: Component,isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated !== true
      ? <Component {...props} />
      : <Redirect to='/authors' />
  )} />
);

class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* {!this.props.isAuthenticated?
          [<NavLink to="/signup" className="nav-link" activeClassName="active">Sign up</NavLink>,
          <NavLink to="/login"  className="nav-link" activeClassName="active">Login</NavLink>
        
          ]:null
          }
          {this.props.isAuthenticated?(
          [<NavLink to="/authors"   className="nav-link" activeClassName="active">Authors Data</NavLink>,
          <NavLink to="/list"   className="nav-link" activeClassName="active">list</NavLink>,
          <NavLink to="/logout"  className="nav-link"  activeClassName="active">Logout</NavLink>
          ]  
        ):null
          }
          <NavLink to="/home" className="nav-link"  activeClassName="active">Home</NavLink> */}
        <Switch>
          <OpenRoute path="/login" exact isAuthenticated={this.props.isAuthenticated} component={Login} /> 
          <OpenRoute path="/signup" exact isAuthenticated={this.props.isAuthenticated} component={Signup} /> 
          <PrivateRoute path="/authors" exact isAuthenticated={this.props.isAuthenticated} component={AuthorList}/>
          <Route path="/logout" exact render={(props)=>{
            console.log("in here",this.props);
            this.props.logOutUser();
            return this.props.isAuthenticated?(
              <Redirect to='/login' />
            ):(<Redirect to='/authors' />);
          }}/>
          <PrivateRoute path="/list" exact isAuthenticated={this.props.isAuthenticated} component={AdminList}/>
          <Route path="/home" component={Home}/>
          <Route path="/admin" component={Admin} />
          <Route  path="/dashboard" component={Admin} />
          <Route path="*" render={()=>{
            return (
              <div>Not Matched</div>
            )
          }}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state=>{
  return {
    isAuthenticated:state.auth.authorized
  }
}
const mapDipatchToProps = dispatch=>{
  return {
    logOutUser : ()=>dispatch(actions.logOutUser())
  }
}

export default withRouter(connect(mapStateToProps,mapDipatchToProps)(App));
