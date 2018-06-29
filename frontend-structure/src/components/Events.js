import React, { Component } from 'react';

class Events extends Component {
    render() {
        return (
            <div className="events">
            <img src="/assets/event.jpg" alt="Event" width="300" height="300" style={{'border-radius':'50%'}}/>

               <p> Event management is the application of project management to the creation 
                and development of large-scale events such as festivals, conferences, 
                ceremonies, weddings, formal parties, concerts, or conventions.
                 It involves studying the brand, identifying its target audience,
                devising the event concept, and coordinating the technical 
                aspects before actually launching the event.  It involves studying the brand,
                 identifying its target audience,devising the event concept, and coordinating 
                 the technical aspects before actually launching the event.</p>
                
            </div>
        );
    }
}

export default Events;