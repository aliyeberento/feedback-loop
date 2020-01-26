import React, { Component } from 'react';

// import { Link } from "react-router-dom";


class Review extends Component {

    handleSubmit = (event) => {
        console.log( 'it works')
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

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick = { ( event) => this.handleSubmit(event) } >
                    Submit
                </button>
            </>
        )
    }
}

export default Review