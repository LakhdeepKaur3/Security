import React, { Component } from 'react';
import Navbar from './navbar.js';
//import Jumbotron from '../components/Jumbotron';

import Registrationform from './Registrationform';



class Contact extends Component {
    render() {
        return (
            <div id="contact-us">
               {/* <Jumbotron title="Dream Society Delhi"  subtitle="Most Welcome to my society!" /> */}
            <div className="container">
            <div className="row">
{/*                 
                       adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                   Cum sociis natoque penatibus et magnis dis parturient montes, 
                   nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. 
                  Nulla consequat massa quis enim. Donec pede justo, 
                  fringilla ve
                  Lorem ipsum dolor sit amet, consectetuer 
                  
           l, aliquet nec, vulputate eget, arcu. In enim justo,
                   rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                   
                    eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                     Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. */}

              <div className="col-4">
               <h3>Contact</h3>
               <p >Address<br/>
                   Dream City-490/16,<br/>
                   Dream street,<br/>
                   Dream Society,Delhi-122001.
                   
               </p>
               

</div>
    <div className="col-8">
              <Registrationform/>
              </div>
</div>
                
            </div>
            
            
        
            </div>
        );
    }
}

export default Contact;