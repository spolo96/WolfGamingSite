// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import autobind from '../../utils/autobind';
import compose from '../../utils/compose';

import './styles.css';
import { Menu,} from 'semantic-ui-react'

import type {
    Dispatch,
    MapStateToProps,
    MapDispatchToProps,
    RouterHistory,
    State,
} from '../../types';

  type Props = {
    history: RouterHistory,
    location: Location

  };

  type ContainerState = {

  };

  const mapStateToProps: MapStateToProps<Props> = (state: State) => ({

  });

  const mapDispatchToProps: MapDispatchToProps<Props> = (dispatch: Dispatch) => ({

  });

  const decorators = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
  );


  class NavbarComponent extends Component {
    props: Props;
    state: ContainerState;
    constructor(props: Props, context: any) {
        super(props, context);
        autobind(this);

        this.state = {
            activeItem:'',
        };
      }
      render() {
        return (
            <Menu stackable pointing secondary>
            <Menu.Item header onClick={this.onNavigateToHome}> Wolf Gaming Site </Menu.Item>
            <Menu.Item name='aboutUs'   position='right' onClick={this.onNavigateToAbout} />
            <Menu.Item name='Services'  onClick={this.onNavigateToServices} />
            <Menu.Item name='ContactUs' onClick={this.onNavigateToContact} />
            </Menu>

        );

      }

      pushToNewRouteOnly(pathname) {
        if (pathname !== '') this.props.history.push(pathname);
      }

      onNavigateToHome(){

        this.pushToNewRouteOnly('/');
      }
      onNavigateToAbout(){

        this.pushToNewRouteOnly('/aboutUs');
      }

      onNavigateToServices(evt){

        this.pushToNewRouteOnly('/services');
      }

      onNavigateToContact(){

        this.pushToNewRouteOnly('/contactUs');
      }


  }

  export default decorators(NavbarComponent);
