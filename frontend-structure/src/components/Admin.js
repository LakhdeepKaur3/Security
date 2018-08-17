import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import AdminNavbar from './AdminNavbar';
import Vendor from './Vendor';
import Money from './Money';
import Assets from './Assets';
import Parking from './Parking';
import Society from './Society';
import Events from './Events';
import ManageAdmin from './manage-admin';
import ManageOwner from './manage-owner';
import AdminList  from '../containers/AdminList';

import AddAdmin from   '../components/AdminAdd';

class Admin extends Component {
    render() {
        return (
            <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                <div>
                    <h1 className="text-center"> Admin Page</h1>
                    <Link to="/">
                        <Button bsStyle="primary">Home</Button>
                    </Link>
                    <Link to="/admin">
                        <Button bsStyle="primary">Dashbord</Button>
                    </Link>
                </div>
                <Grid fluid >
                    <Row className="show-grid text-center">
                        <Col lg={4} className="first-part">
                            <Route path="/admin" exact render={(props)=>{
                            return <AdminNavbar  navs={
                                [
                                    {
                                            linkPath:'/admin/vendor',
                                            linkText:'Vendor Management ',
                                            icon:'ic_aspect_ratio'
                                    },
                                    {
                                            linkPath:'/admin/parking',
                                            linkText:'Parking Management',
                                            icon:'car'
                                    },
                                    {
                                            linkPath:'/admin/events',
                                            linkText:'Events Management',
                                            icon:'ic_business'
                                    },{
                                            linkPath:'/admin/assets',
                                            linkText:'Assets Management',
                                            icon:'lock'

                                    },{
                                            linkPath:'/admin/money',
                                            linkText:'Money Management',
                                            icon:'inr'
                                    },{
                                            linkPath:'/admin/society/',
                                            linkText:'Society Management',
                                            icon:'home'
                                    }
                            ]
                            }/> 
                        }}>
                            </Route>

                            <Route path="/admin/society/*" render={(props)=>{
                                return <AdminNavbar  navs={
                                    [
                                        {
                                                linkPath:'/admin/society/manage-admin/',
                                                linkText:'Admin Management ',
                                                icon:'ic_aspect_ratio'
                                        },
                                        {
                                                linkPath:'/admin/society/manage-owner/',
                                                linkText:'Owner Management',
                                                icon:'car'
                                        }
                                    ]}/>
                                }}>
                            </Route>

                            
                        </Col >
                     
                        <Col lg={8} >
                          <div>
                            <Route path="/admin/vendor" component={Vendor} />
                            <Route path="/admin/parking" component={Parking} />
                            <Route path="/admin/assets" component={Assets} />
                            <Route path="/admin/events" component={Events} />
                            <Route path="/admin/money" component={Money} />
                            <Route path="/admin/society/" exact render={ ()=>{
                                console.log("redirecting");
                                return <Redirect to="/admin/society/manage-admin/" />
                            }}/>
                            <Route path='/admin/society/manage-admin/*' component={ManageAdmin}/>
                            <Route path='/admin/society/manage-owner/*' component={ManageOwner}/>
                        
                            <Route exact path='/admin/society/manage-admin/view-admin' component={AdminList}/>
                            <Route path = "/admin/society/manage-admin/add" component ={AddAdmin} />
                            </div>
                            {/* <Route path="/authors" exact component={AuthorList} /> */}
                        </Col>
                       
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Admin;