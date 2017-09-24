// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Icon, Menu,Form, Checkbox,Panel,Segment, Header, Container, Confirm} from 'semantic-ui-react'
import './style.css';

import {
  AppName,
} from '../../constants';

type Props = {

};

const SpecialButtonTest = (props) => (
    <div>
    <Button onClick={this.props.show}>Submit</Button>
        <Confirm
          open={this.props.state.open}
          cancelButton='Never mind'
          confirmButton="Let's do it"
          onCancel={this.props.handleCancel}
          onConfirm={this.props.handleConfirm}
        />
      </div>
);

const ContactView = (props) => (
  <div className='contact'>
    <section className='panelSetting ui text container'>
    <Header as='h1'>Sign Up for the Pack</Header>
      <Container>
        <p>
          Complete this simple form in order to become one of the pack.
        </p>
    </Container>
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
      <label>Select your animal</label>
      <input placeholder='Lion, Wolf, Fox, etc' />
    </Form.Field>
    <Form.Field>
      <label>Phone Number</label>
      <input type='number' placeholder='Phone' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button animated='fade' onClick = {this.onNavigateToLogin} >
      <Button.Content visible>
        Submit
        <a href= '/login2' />
      </Button.Content>
      <Button.Content hidden>
        I'm ready!
      </Button.Content>
    </Button>
  </Form>
)

export default ContactView;
