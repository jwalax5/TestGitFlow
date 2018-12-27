import React, { Component } from 'react';
import '../css/App.css';
import MenuBar from './MenuBar';
//import SimpleComponent from './SimpleComponent';
//import StatefulComponent from './StatefulComponent';
import { Container, Row, Col } from 'reactstrap';
import Blue from './Blue';
import Red from './Red';
import Green from './Green';
import Login from './Login';
import ToDo from './ToDo';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../modules/store';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {

  render() {
    return (
      // <Container fluid="true"></Container>
      <ReduxProvider store={reduxStore}>
        <Container fluid={true}>
          <Row><Col> <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small></Col></Row>
          <BrowserRouter basename={'/toTomcat'}>
            <Row className="show-grid">
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                <div className="App">
                  <header className="App-header">
                  </header>
                  <MenuBar />
                  <div>
                    {/* <SimpleComponent />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="summit">Submit</button>
                  <StatefulComponent /> */}
                    <Route exact path={'/Login'} component={Login} />
                    <Route path={'/Red'} component={Red} />
                    <Route path={'/Blue'} component={Blue} />
                    <Route path={'/Green'} component={Green} />
                  </div>
                  <ToDo />


                  {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

                </div>
              </Col>
            </Row>
          </BrowserRouter>
        </Container>
      </ReduxProvider>
    );
  }
}

export default App;
