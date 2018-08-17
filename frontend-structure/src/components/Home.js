import React, { Component } from 'react';
import Navbar from './navbar.js';
import Featured from './featured';
//import About from './components/about';
import Contact from './contact';
import Gallery from './gallery';
import About from './about'
const URL_HOME = 'http://localhost:3004/home';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: ''
        }
    }


    componentDidMount() {
        fetch(URL_HOME, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    home: json
                })
            });

    }
    

    render() {
console.log("current props is ",this.props.location);
        return (
            <div id="home">
                
                    <Navbar/>
                <div>
                        <Featured slides={this.state.home.slider} />
                    </div>
                <div className="container">
                    
                    <h3 style={{textAlign:"center", marginTop:"30px"}}>Home</h3>
                    <p>
                        Lorem ipsum dolor sit amet,
                         consectetuer adipiscing elit.
                          Aenean commodo ligula eget dolor
                          . Aenean massa. Cum sociis natoque p
                          enatibus et magnis dis parturient montes, 
                          nascetur ridiculus mus. Donec quam felis, ultricies nec
                          , pellentesque eu, pretium quis, sem. Nulla consequat
                           massa quis enim. Donec pede justo, fringilla vel, 
                           aliquet nec, vulputate eget, arcu. In enim justo,
                            rhoncus ut, imperdiet a, venenatis vitae, justo.
                             Nullam dictum felis eu pede mollis pretium. Int
                             eger tincidunt. Cras dapibus. Vivamus elementum
                              semper nisi. Aenean vulputate eleifend tellus.
                              , pellentesque eu, pretium quis, sem. Nulla consequat
                           massa quis enim. Donec pede justo, fringilla vel, 
                           aliquet nec, vulputate eget, arcu. In enim justo,
                            rhoncus ut, imperdiet a, venenatis vitae, justo.
                             Nullam dictum felis eu pede mollis pretium. Int
                             eger tincidunt. Cras dapibus. Vivamus elementum
                              semper nisi. Aenean vulputate eleifend tellus
                              , pellentesque eu, pretium quis, sem. Nulla consequat
                           massa quis enim. Donec pede justo, fringilla vel, 
                           aliquet nec, vulputate eget, arcu. In enim justo,
                            rhoncus ut, imperdiet a, venenatis vitae, justo.
                             Nullam dictum felis eu pede mollis pretium. Int
                             eger tincidunt. Cras dapibus. Vivamus elementum
                              semper nisi. Aenean vulputate eleifend tellus
                </p>
                    <p>
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                </p>
               
                </div>
                <About/>
                <Gallery/>
                <Contact/>        
                
               

            </div>
        );
    }



}

export default Home;