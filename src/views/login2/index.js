// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Icon, Menu, Container, Header, Table, Rating} from 'semantic-ui-react'
import './style.css';

import {
  AppName,
} from '../../constants';

type Props = {

};

const LoginView = (props) => (
  <div className='login'>
    <Container text>
    <Header as='h2'>Welcome, new member!</Header>
    <p> Welcome to WolflyPolo's Gaming Site Services. In here you will be able to suscribe to Wolf's plan of
    awesome fun and getting to know it. This is what you should do after you try to contact him. Get ready for a ton of action!
    </p>
    </Container>
    <Table celled padded>
   <Table.Header>
     <Table.Row>
       <Table.HeaderCell singleLine>Suscribed</Table.HeaderCell>
       <Table.HeaderCell>Zone</Table.HeaderCell>
       <Table.HeaderCell>Rating</Table.HeaderCell>
       <Table.HeaderCell>Statistics</Table.HeaderCell>
       <Table.HeaderCell>Comments</Table.HeaderCell>
     </Table.Row>
   </Table.Header>

   <Table.Body>
     <Table.Row>
       <Table.Cell>
         <Header as='h2' textAlign='center'>NO</Header>
       </Table.Cell>
       <Table.Cell singleLine>Youtube Channel</Table.Cell>
       <Table.Cell>
         <Rating icon='star' defaultRating={3} maxRating={3} />
       </Table.Cell>
       <Table.Cell textAlign='right'>
           80% <br />
         <a href='#'>202 suscribers</a>
       </Table.Cell>
       <Table.Cell>
          The official channel of WolflyPolo, here you'll find like almost every thing he posts and plays.
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>
         <Header as='h2' textAlign='center'>NO</Header>
       </Table.Cell>
       <Table.Cell singleLine>WolfPack Pro Account</Table.Cell>
       <Table.Cell>
         <Rating icon='star' defaultRating={3} maxRating={3} />
       </Table.Cell>
       <Table.Cell textAlign='right'>
           100% <br />
         <a href='#'>65 pros</a>
       </Table.Cell>
       <Table.Cell>
           The official Pro membership for every person/animal that wants to become one of the Pack and be around, get
           exclusive rewards and more.
       </Table.Cell>
     </Table.Row>
   </Table.Body>
 </Table>
  </div>
);


export default LoginView;
