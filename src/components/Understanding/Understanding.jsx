import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";


class Understanding extends Component {

    state = {
        input: {
            Understanding: ''
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
                <h2> How well do you understand today's work? </h2>
                <form>
                    <label> Out of 10 </label>
                    <input type="number"
                        onChange={(event) => this.handleChangeFor('Understanding', event)}
                    />
                </form>
                <Link to="/Supported" 
                 onClick={() => this.props.dispatch(
                    {
                        type: 'UNDERSTANDING',
                        payload: this.state.input.Understanding
                    })}> Next </Link>
            </>
        )
    }
}

export default connect()(Understanding)