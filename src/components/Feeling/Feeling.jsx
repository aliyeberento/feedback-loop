import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';



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
            <Paper>
                <Card>
                    <CardContent>
                        <h2> How are you feeling today? </h2>
                        <form noValidate required>
                            
                            <TextField  label = 'Out of 10' type="number"
                                onChange={(event) => this.handleChangeFor('feelings', event)}
                            />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Link to="/Understanding"
                            onClick={() => this.props.dispatch(
                                {
                                    type: 'FEELINGS',
                                    payload: this.state.input.feelings
                                })
                            }> Next
                        </Link>
                    </CardActions>
                </Card>
            </Paper>
        )
    }
}



export default connect()(Feelings)