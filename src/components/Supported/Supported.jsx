import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";


class Supported extends Component {

    state = {
        input: {
            Support: ''
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
                <h2> Are you feeling supported? </h2>
                <form>
                    <label> Out of 10 </label>
                    <input type="number"
                        onChange={(event) => this.handleChangeFor('Support', event)}
                    />
                </form>
                <Link to="/Comments"
                    onClick={() => this.props.dispatch(
                        {
                            type: 'SUPPORT',
                            payload: this.state.input.Support
                        })}> Next </Link>
            </>
        )
    }
}

export default connect()(Supported)