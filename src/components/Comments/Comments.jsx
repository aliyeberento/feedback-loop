import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Link} from "react-router-dom";


class Comments extends Component {

    state = {
        input: {
            Comments: ''
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
        return(
            <>
            <h2> Any additional questions/comments? </h2>
            <form>
                <label> Write here</label>
                <input type = "text" placeholder = "Comments"
                 onChange={(event) => this.handleChangeFor('Comments', event)}
                 />
            </form>
            <Link to = "/Review" 
            onClick={() => this.props.dispatch(
                {
                    type: 'COMMENTS',
                    payload: this.state.input.Comments
                })}> Next </Link>
            </>
        )
    }
}

export default connect()(Comments)