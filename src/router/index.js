// @flow

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import type {
  MapStateToProps,
  MapDispatchToProps,
  State,
} from '../types';

import HomeContainer from '../containers/home';
import AboutContainer from '../containers/about';
import ContactContainer from '../containers/contact';
import ServicesContainer from '../containers/services';
import { Navbar } from '../components';
import { Footer } from '../components';
type Props = {
};

const mapStateToProps: MapStateToProps<Props> = (state: State) => ({
});

const mapDispatchToProps: MapDispatchToProps<Props> = (dispath: Dispatch) => ({
});

class RootRouter extends Component {
  props: Props;

  render() {
    return (
      <Router>
        <div className='app'>
          <Navbar/>
         
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/aboutUs' component={AboutContainer} />
            <Route exact path='/contactUs' component={ContactContainer} />
            <Route exact path='/services' component={ServicesContainer} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
