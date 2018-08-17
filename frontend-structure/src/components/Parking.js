import React, { Component } from 'react';

class Parking extends Component {
    render() {
        return (
            <div className="parking">
            <img  src="/assets/parking.jpg" alt="Parking" width="300" height="300" style={{'border-radius':'50%'}}/>
                <p>

                    A car parking system is a mechanical device that multiplies parking
                    capacity inside a parking lot. Parking systems are generally
                    powered by electric motors or hydraulic pumps that move vehicles
                    into a storage position.
                    Car parking systems may be traditional or automated. Automatic
                     multi-storey automated car park systems are less expensive per
                     parking slot, since they tend to require less building volume
                     and less ground area than a conventional facility with the same
                      capacity. In the long term, automated car parking systems are
                    likely to be more cost effective than traditional parking garages.
                
</p>
            </div>
        );
    }
}

export default Parking;