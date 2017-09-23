// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Icon, Menu,Form, Checkbox,Panel,Segment} from 'semantic-ui-react'
import './style.css';

import {
  AppName,
} from '../../constants';

type Props = {

};

const ContactView = (props) => (
  <div className='contact'>

    <section className='panelSetting ui text container'>
    <FormExampleUnstackableGroup/>
    </section>
   
  </div>
);

const FormExampleUnstackableGroup = (props) => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Phone Number</label>
      <input type='number' placeholder='Phone' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)


export default ContactView;
