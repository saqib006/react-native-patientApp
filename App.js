import React, { Component } from 'react';
import {Container} from 'native-base';
import {NativeRouter, Route} from 'react-router-native';
import AddPatient from './components/addPatient'; 
import Home from './components/Home';
import Search from './components/Search';
import { store } from './store/index';
import {Provider} from 'react-redux';

export default class App extends Component {

   

  render() {
    return (
      <Provider store={store}>
      <NativeRouter>
      <Container>
          <Route exact path="/" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/patient" component={AddPatient}></Route>
      </Container>    
      </NativeRouter>
      </Provider>
    );
  }
}

