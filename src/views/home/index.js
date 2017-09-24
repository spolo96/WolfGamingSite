// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Icon, Grid, Image, Segment, Message, Container, Header} from 'semantic-ui-react'
import foto from '../../assets/images/wolf1.png'
import foto2 from '../../assets/images/wolf2.jpg'
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
    <div className ='content'>
      <Container text>
      <Header as='h2'>A note to the Pack</Header>
      <p> Welcome to WolflyPolo's Gaming Site Services. In here you will be able to suscribe to Wolf's plan of
      awesome fun and getting to know it. This is what you should do after you try to contact him. Get ready for a ton of action!
      </p>
      <p> This is the Home page of the Wolf Gaming Site. You can travel around via the the navbar, or the secret panel below.
      Be sure to sign up in order to receive a lot of info and feedback about the site. Or log in, if you already have an account.
        </p>
      </Container>
      <GridExampleStackable/>
     </div>
  </div>
);

const GridExampleStackable = (props) => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Image src= {foto} size= 'medium' centered= 'true'/>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src= {foto2} size= 'medium' centered= 'true'/>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default HomeView;
