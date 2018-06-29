//############################### SJ #############################
import React from 'react';
// import {Link} from 'react-router-dom';
import { copyright } from 'react-icons-kit/fa/copyright'
import Icon from 'react-icons-kit';



class Footer extends React.Component {
    render() {
        return (
            <footer className="navbar navbar-expand-lg navbar-light bg-light " role="navigation">
                <div className="footer-copyright">
                    <Icon icon={copyright} />  <span id="copyright-text"> All rights reserved.</span>
                </div>
            </footer>
        )
    }
}


export default Footer;