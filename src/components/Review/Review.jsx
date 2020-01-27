import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";



class Review extends Component {

    


    sendData = () => {
        let survey = {
            feelings: this.props.store.feelingsReducer,
            understanding: this.props.store.understandingReducer,
            support: this.props.store.understandingReducer,
            comments: this.props.store.commentsReducer
        }
        axios.post('/Review', survey)
        .then( (result) => {
            console.log('in post route')
        }).catch ( error => {
            console.log(error)
        })
    }
   

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('it works')
        this.sendData()
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>
                                How are you feeling?
                        </th>
                            <th>
                                How well do you understand the content?
                        </th>
                            <th>
                                Do you feel supported?
                        </th>
                            <th>
                                Any addition comments?
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {this.props.store.feelingsReducer}
                            </td>
                            <td>
                                {this.props.store.understandingReducer}
                            </td>
                            <td>
                                {this.props.store.supportReducer}
                            </td>
                            <td>
                                {this.props.store.commentsReducer}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={(event) => this.handleSubmit(event)} >
                    Submit
                </button>
                <Link to= "/Feelings"> Restart
                </Link>
            </>
        )
    }
}

const mapStateToProps = (store) => ({
    store
})

export default connect(mapStateToProps)(Review)