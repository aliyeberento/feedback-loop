import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
// import { Textbox, Textarea, Radiobox, Checkbox, Select } from 'react-inputs-validation'



class Feelings extends Component {

    state = {
        input: {
            feelings: ''

        }
    }

    handleClick = () => {
        if( this.state.input.feelings.length === 0 ) {
            alert('input cannot be empty')
        }
        else {
            this.props.dispatch(
            {
                type: 'FEELINGS',
                payload: this.state.input.feelings
            })
            //move to next page
            this.props.history.push('/Understanding')
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
                        <form  >
                            <TextField label='Out of 10' type="number"
                                onChange={(event) => this.handleChangeFor('feelings', event)}
                            />
                        </form>
                    </CardContent>
                    <CardActions>
                        <button to="/Understanding" 
                            onClick={this.handleClick}> Next
                        </button>
                    </CardActions>
                </Card>
            </Paper>
        )
    }
}



export default connect()(Feelings)