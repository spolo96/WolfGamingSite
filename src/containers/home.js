// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from '../utils/autobind';
import compose from '../utils/compose';

import type {
  Dispatch,
  MapStateToProps,
  MapDispatchToProps,
  RouterHistory,
  State,
} from '../types';

import HomeView from '../views/home';

type Props = {

};

type ContainerState = {

};

const mapStateToProps: MapStateToProps<Props> = (state: State) => ({

});

const mapDispatchToProps: MapDispatchToProps<Props> = (dispath: Dispatch) => ({

});

class HomeContainer extends Component {
  props: Props;
  state: ContainerState;
  constructor(props, context) {
    super(props, context);
    autobind(this);
    this.state = {
   
    };
  }
  render() {

    return (
      <HomeView
        {...this.props}
        {...this.state}
      
      />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
