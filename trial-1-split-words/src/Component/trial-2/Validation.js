import React, { Component } from 'react'

class Validation extends Component {
    render() {
    let textVal = "TEXT size is OK.";

    if (this.props.textLen <= 5) {
        textVal = "text too SHORT!!!"
    };

        return (
            <div>
               <p>{textVal}</p>
            </div>
        )
    }

}

export default Validation;