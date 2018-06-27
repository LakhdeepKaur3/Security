import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import AdminNavbar from './AdminNavbar';
import Vendor from './Vendor';
import Money from './Money';
import Assets from './Assets';
import Parking from './Parking';
import Society from './Society';
import Events from './Events';

class Admin extends Component {
    render() {
        return (
            <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                <Jumbotron>
                    <h1>  Admin Page</h1>
                    <Link to="/">
                        <Button bsStyle="primary">Home</Button>
                    </Link>
                    <Link to="/admin">
                        <Button bsStyle="primary">Dashboard</Button>
                    </Link>
                </Jumbotron>
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
                                            linkPath:'/admin/society',
                                            linkText:'Society Management',
                                            icon:'home'
                                    }
                            ]
                            }/> 
                        }}>
                            </Route>
                            <Route path="/admin/society" exact render={(props)=>{
                                return <AdminNavbar  navs={
                                    [
                                        {
                                                linkPath:'/admin/society/manage-admin',
                                                linkText:'Admin Management ',
                                                icon:'ic_aspect_ratio'
                                        },
                                        {
                                                linkPath:'/admin/society/manage-owner',
                                                linkText:'Owner Management',
                                                icon:'car'
                                        }
                                    ]}/>
                                }}>
                            </Route>
                        </Col >
                     
                        <Col lg={7} >
                          <div>
                            <Route path="/admin/vendor" component={Vendor} />
                            <Route path="/admin/parking" component={Parking} />
                            <Route path="/admin/assets" component={Assets} />
                            <Route path="/admin/event" component={Events} />
                            <Route path="/admin/money" component={Money} />
                            <Route path="/admin/society" component={Society} />
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