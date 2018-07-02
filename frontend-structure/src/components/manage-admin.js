import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class ManageAdmin extends Component {
    render() {
        return (
            <div id='admin-bar'> 
                <nav className="navbar navbar-expand-lg bg-dark" >
                    <ul className="navbar-nav mx-auto">
                        <div className="btn-grid">
                        <li class="nav-item">
                        <Link to="/admin/society/manage-admin/add"  class="nav-link btn btn-outline-info btn-lg">
                          ADD ADMIN
                        </Link>
                            </li>

                            {/* <li class="nav-item">
                                <button type="button" class="btn btn-outline-primary btn-lg"><Link to="/add">  <a class="nav-link" href="#"><span>ADD ADMIN</span></a></Link></button>
                            </li> */}
                        </div>
                        <div>
                            <li class="nav-item">
                                <Link to="/admin/society/manage-admin/view-admin" className="btn btn-outline-info btn-lg nav-link">  
                                VIEW ADMIN</Link>
                            </li>
                        </div>
                        <div>
                            <li class="nav-item">
                                <Link to="/update" class="btn btn-outline-info btn-lg nav-link"> 
                                 UPDATE ADMIN</Link>
                            </li>
                        </div>
                    </ul>

                </nav>
            </div>
        )
    }
}

export default ManageAdmin;