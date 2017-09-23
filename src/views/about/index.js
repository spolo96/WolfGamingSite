// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Icon, Menu } from 'semantic-ui-react'
import './style.css';

import {
  AppName,
} from '../../constants';

type Props = {

};

const AboutView = (props) => (
  <div className='about'>

    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>

    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>

    <Button animated='fade'>
      <Button.Content visible>
        Sign-up for a Pro account
      </Button.Content>
      <Button.Content hidden>
        $12.99 a month
      </Button.Content>
    </Button>
  </div>
);

export default AboutView;
