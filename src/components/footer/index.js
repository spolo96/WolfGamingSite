// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import autobind from '../../utils/autobind';
import compose from '../../utils/compose';


import './styles.css';
import {} from 'semantic-ui-react'

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


  class FooterComponent extends Component {
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
          <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="three wide column">
                <h4 className="ui inverted header">About</h4>
                <div className="ui inverted link list">
                  <a href="aboutUs" className="item">Contact Us</a>
                  <a href="https://www.youtube.com/user/WolflyPolo" className="item">Gaming Channel</a>
                  <a href="#" className="item">Wolf Plans</a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Services</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">DNA FAQ</a>
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">The Pack Mission</h4>
                <p>Are you enjoying your stay? Be sure to go to the Contact page to possibly meet the Wolf!</p>
              </div>
            </div>
          </div>
        </div>

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

  export default decorators(FooterComponent);
