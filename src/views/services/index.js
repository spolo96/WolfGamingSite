// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Icon, Menu, Container, Divider, Header, Message} from 'semantic-ui-react'
import './style.css';

import {
  AppName,
} from '../../constants';

type Props = {

};

const ServicesView = (props) => (
  <div className='service'>
    <Button animated='vertical'>
      <Button.Content hidden>Rewards!</Button.Content>
      <Button.Content visible>
        <Icon name='trophy' />
      </Button.Content>
    </Button>

    <Button animated='fade'>
      <Button.Content visible>
        Sign-up for a Wolf account!
      </Button.Content>
      <Button.Content hidden>
        $0.99 a month
      </Button.Content>
    </Button>

    <Container text>
    <Header as='h2'>A note to the Pack</Header>
    <p> Welcome to WolflyPolo's Gaming Site Services. In here you will be able to suscribe to Wolf's plan of
    awesome fun and getting to know it. This is what you should do after you try to contact him. Get ready for a ton of action!
      </p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
  </Container>
  
  </div>
);

export default ServicesView;
