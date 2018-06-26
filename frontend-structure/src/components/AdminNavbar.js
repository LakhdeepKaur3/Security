import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { lock } from 'react-icons-kit/fa/lock';
import { car } from 'react-icons-kit/fa/car';
import {inr} from 'react-icons-kit/fa/inr';
import {home} from 'react-icons-kit/ionicons/home';


class AdminNavbar extends Component {
        icons = {
                home,
                inr,
                car,
                lock,
                ic_business,
                ic_aspect_ratio
        };
        showNavs = ()=>{
                return this.props.navs.map((nav,index)=>{
                         return (
                                 <Link id={index} to={nav.linkPath} >
                                 <Nav id={nav.icon}>
                                         <NavIcon><SvgIcon size={20} icon={this.icons[nav.icon]} /></NavIcon>
                                         <NavText className="nav-text"> {nav.linkText}</NavText>
                                 </Nav>
                                 </Link>
                         )
                });
        }
        render() {

                /*
        [
                {
                        linkPath:'/admin/vendor',
                        linkText:'Vendor Management '
                },
                {
                        linkPath:'/admin/parking',
                        linkText:'Parking Management '
                },
                {
                        linkPath:'/admin/events',
                        linkText:'Events Management '
                },{
                        linkPath:'/admin/assets',
                        linkText:'Assets Management '
                },{
                        linkPath:'/admin/money',
                        linkText:'Money Management '
                },{
                        linkPath:'/admin/society',
                        linkText:'Society Management '
                }
        ]
                */
              
                return (
                        <div className="main" style={{ background: '#2c3e50', color: '#FFF', width: 400,height:500 }}>
                                <SideNav className="side-nav" highlightColor='black' highlightBgColor='#00bcd4' defaultSelected='sales'>
                                {this.showNavs()} 
                                        
                                </SideNav>
                        </div>
                )

        }
}

export default AdminNavbar;