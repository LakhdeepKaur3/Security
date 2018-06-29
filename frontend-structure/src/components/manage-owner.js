import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ManageOwner extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-dark">

                    <ul className="navbar-nav mx-auto">
                        <div className="btn-group">
                            <li class="nav-item">
                               <Link to="/add" className="btn btn-outline-info btn-lg nav-link">
                                ADD OWNER
                               </Link>
                            </li>
                        </div>
                        <div>
                            <li class="nav-item">
                            <Link to="/view" className="btn btn-outline-info btn-lg nav-link">  
                              VIEW OWNER
                              </Link>
                            </li>
                        </div>
                        <div>
                            <li class="nav-item">
                                <Link to="/update"className="btn btn-outline-info btn-lg nav-link">  
                             UPDATE OWNER
                                </Link>
                             </li>
                        </div>
                    </ul>

                </nav>
            </div>
        )
    }
}

export default ManageOwner;