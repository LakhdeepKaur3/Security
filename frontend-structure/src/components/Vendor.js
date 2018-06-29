import React, { Component } from 'react';

class Vendor extends Component {
    render() {
        return (
            <div className="vendor">
             <img src="/assets/vendor.jpg" alt="Vendor" width="300" height="300" style={{'border-radius':'50%'}}/>
                   <p> A vendor management system (VMS) is an Internet-enabled, often Web-based
                    application that acts as a mechanism for business to manage and procure
                    staffing services – temporary, and, in some cases, permanent placement
                    services – as well as outside contract or contingent labor. Typical
                    features of a VMS application include order distribution, consolidated 
                    billing and significant enhancements in reporting capability that outperforms
                    manual systems and processes.
                    In the financial industry due to recent regulations (see FRB SR13-19;[2] OCC
                     2013-29 and CFPB 2012-03), vendor management implies consistent risk 
                     classification and due diligence to manage third-party risk.
                    A number of institutions have re-classified or renamed their programs to Third Party
                    Risk Management (TPRM) to align with the verbiage used by the regulatory agencies.</p>
                
                   
                    
              
            </div>
        )
    }
}
export default Vendor;