import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";



class Feelings extends Component {

    state = {
        input: {
            feelings: ''
     
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            input: {
                ...this.state.input,
                [propertyName]: event.target.value
            }
        }, () => {
            console.log(this.state.input)
        })
    }


render() {



    return (
        <>
            <h2> How are you feeling today? </h2>
            <form noValidate required>
                <label> Out of 10 </label>
                <input type="number"
                 onChange={(event) => this.handleChangeFor('feelings', event)}
                 />
            </form>
            <Link to="/Understanding"
                onClick={() => this.props.dispatch(
                    {
                        type: 'FEELINGS',
                        payload: this.state.input.feelings
                    })
                    }> Next
                </Link>
        </>
    )
}
}



export default connect()(Feelings)