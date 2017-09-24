// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Icon, Menu, Container, Header } from 'semantic-ui-react'
import './style.css';

import {
  AppName,
} from '../../constants';

type Props = {

};

const AboutView = (props) => (
  <div className='about'>
    <Container text>
    <Header as='h2'>About me</Header>
    <p> Welcome to WolflyPolo's Gaming Site Services. In here you will be able to suscribe to Wolf's plan of
    awesome fun and getting to know it. This is what you should do after you try to contact him. Get ready for a ton of action!
    </p>
    <p> This is the Home page of the Wolf Gaming Site. You can travel around via the the navbar, or the secret panel below.
    Be sure to sign up in order to receive a lot of info and feedback about the site. Or log in, if you already have an account.
      </p>
      <p>
        Samuel David Polo Peña "WolflyPolo" (known as that in Xbox Live)
        Young actually student of System Engineering 8th Semester. The Real and Supreme Wolf of the Last Stand.
      </p>
    </Container>
  </div>
);

export default AboutView;
