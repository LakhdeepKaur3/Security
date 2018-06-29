import React, { Component } from 'react';

class Money extends Component {
    render() {
        return (
            <div className="money">
            <img src="/assets/money.jpg" alt="Money" width="300" height="300" style={{'border-radius':'50%'}}/>
               
               
            <p> Money management is the process of expense tracking, investing,
                 budgeting, banking and evaluating taxes of ones money which is 
                also called investment management.
                Money management is a strategic technique to make money yield
                 the highest interest-output value for any amount spent.
                Spending money to satisfy cravings (regardless of whether
                they can justifiably be included in a budget) is a natural
                human phenomenon. The idea of money management techniques
                has been developed to reduce the amount that individuals,
                firms and institutions spend on items which add no significant 
                value to their living standards, long-term portfolios and assets. </p>
            </div>
        );
    }
}

export default Money;