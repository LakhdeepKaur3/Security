// import React, { Component } from 'react'

//  class Navbar2 extends Component {
//   render() {
//     return (
//       <div>
//         <h1>hgxgxgwxg</h1>
        
//       </div>
//     )
//   }
// }
// export default Navbar2;





import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 import './navbar.css';

class Navbar2 extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div>
                   
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto">

                         
                         
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                           
                           
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar2;