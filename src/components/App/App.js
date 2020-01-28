import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Button from '@material-ui/core/Button';
import Feelings from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Supported from '../Supported/Supported'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'

//theme stuff
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import { HashRouter as Router, Route, Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: '#80C298',
    secondary: '#717E75'
  }
})

class App extends Component {



  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <br />
            <Link to="/Feelings">
              <Button variant="contained" color="primary">
                Lets Begin
            </Button>
            </Link>
            {/* <Route path="/Feelings" render = {()=> (<Feelings/>) } /> */}
            <Route path="/Feelings" component={Feelings} />
            <Route path="/Understanding" component={Understanding} />
            <Route path="/Supported" component={Supported} />
            <Route path="/Comments" component={Comments} />
            <Route path="/Review" component={Review} />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
