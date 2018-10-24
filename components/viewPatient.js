import React, { Component } from 'react';
import {List, ListItem, Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import axios from 'axios';



export default class ViewPatient extends Component {

   



  render() {

    const { name, tel, email, medication, disease, cost } = this.props.location.state;

    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={()=>this.props.history.replace("/")}>
            <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Patient {name}</Title>
          </Body>
          <Right />
              
        </Header>
        <Content>
          <List>
           
            <ListItem >
              <Text>Name :  {name}</Text>
            </ListItem>
            <ListItem >
              <Text>Phone: {tel}</Text>
            </ListItem>
            <ListItem >
              <Text>Email: {email}</Text>
            </ListItem>
            <ListItem >
              <Text>Disease: {disease}</Text>
            </ListItem>

            <ListItem >
              <Text>Medication: {medication}</Text>
            </ListItem>

    
            <ListItem last>
              <Text>Cost: {cost}</Text>
            </ListItem>
           
          </List>
        </Content>
      </Container>
    );
  }
}


