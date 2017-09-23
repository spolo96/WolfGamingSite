// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Icon, Grid, Image, Segment, Message} from 'semantic-ui-react'
import './style.css';

import {
  AppName,
} from '../../constants';

type Props = {

};

const HomeView = (props) => (
  <div className='home'>
    <Message>
      <Message.Header>New Site Features</Message.Header>
      <Message.List>
        <Message.Item>You can now have suscribe to Wolf's Awesome Plan!</Message.Item>
        <Message.Item>Wolf nows updates the site every week!</Message.Item>
      </Message.List>
    </Message>
    <GridExampleStackable/>

  </div>
);

const GridExampleStackable = (props) => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Image src='http://lorempixel.com/400/200/sports' />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src='http://lorempixel.com/400/200/sports' />
      </Segment>
    </Grid.Column>
  </Grid>
)

export default HomeView;
