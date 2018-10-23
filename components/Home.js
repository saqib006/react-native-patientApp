import React, { Component } from 'react';
import {View, Platform, StyleSheet } from 'react-native';
import {Accordion, List, ListItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
import axios from 'axios';
import {connect} from 'react-redux';
import patientAction from '../store/action/index';

class Home extends Component {

    constructor(props){
      super(props);
     this.state = {
         patients:[]
     }
    }


   

    componentDidMount(){
      this.props.getList()
      
    }


  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>this.props.history.replace("/search")}>
            <Icon name='search' />
            </Button>
          </Left>
          <Body>
            <Title>Patient Tracker</Title>
          </Body>
          <Right >
              <Button onPress={()=>this.props.history.replace("/patient")}>
                  <Text>Add New</Text>
              </Button>
          </Right>
        </Header>
        <Content>
        
        <List>{
            this.props.patientList.map(value=>{
                return(
                <ListItem key={value._id}>
                <Left>
                    <Text>{value.name}</Text>
                  </Left>
                  <Right>
                  <Button transparent>
                    <Icon name="arrow-forward" />
                    </Button>
                  </Right>
                </ListItem>
                )
            })
        }
            
        </List>

        

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
const mapStateToProps = (state) => {
  return{
    patientList:state.patientReducer.patients
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    getList:()=>{return dispatch(patientAction.getData())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)