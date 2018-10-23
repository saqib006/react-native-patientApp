// https://patientapi.herokuapp.com/api/patient
import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import {List, ListItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
import axios from 'axios';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class ViewPatient extends Component {

    constructor(props){
      super(props);

      this.state = {
        search:'',
        
      }

     
    }


    

    changeHandler = (text, name) => {
        let obj = {}
        obj[name] = text
        this.setState(obj)
    }

    searchHandler = () => {
      let obj = {
        name:this.state.name,
        tel:this.state.tel,
        email:this.state.email,
        disease:this.state.disease,
        medication:this.state.medication,
        cost:this.state.cost
      }


    }


  render() {
    return (
      <Container>
        <Header>
            <Left>
           < Button transparent onPress={()=>this.props.history.replace("/")}>
            <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Patient Tracker</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Form>
            <Item floatingLabel >
              <Label>Search</Label>
              <Input onChangeText={(text)=>this.changeHandler(text, "search")} value={this.state.search}/>
              < Button transparent onPress={this.searchHandler}>
            <Icon name='search' />
            </Button>
            </Item>
           
          

          </Form>



        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Designed By Saqib</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  margin:{
    marginTop:5
  }
});
