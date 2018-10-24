// https://patientapi.herokuapp.com/api/patient
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
import {connect} from 'react-redux';
import patientAction from '../store/action/index';
 class AddPatient extends Component {

    constructor(props){
      super(props);

      this.state = {
        name:'',
        tel:'',
        email:'',
        disease:'',
        medication:'',
        cost:'',
        patients:[]
      }

     
    }


  

    changeHandler = (text, name) => {
        let obj = {}
        obj[name] = text
        this.setState(obj)
    }

    submitHandler = () => {
      let obj = {
        name:this.state.name,
        tel:this.state.tel,
        email:this.state.email,
        disease:this.state.disease,
        medication:this.state.medication,
        cost:this.state.cost
      }

      
      this.props.addNewPatient(obj)
    }

    


  render() {

   
    return (


      <Container>
      
          
        <Header>
          <Left>
          <Button transparent onPress={()=>this.props.history.replace("/")}>
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
              <Label>Name</Label>
              <Input onChangeText={(text)=>this.changeHandler(text, "name")} value={this.state.name}/>
            </Item>
            <Item floatingLabel >
              <Label>Tel</Label>
              <Input value={this.state.tel} onChangeText={(text)=>this.changeHandler(text, "tel")} />
            </Item>
            <Item  floatingLabel >
              <Label>Email</Label>
              <Input value={this.state.email} onChangeText={(text)=>this.changeHandler(text, "email")} />
            </Item>

            <Item  floatingLabel >
              <Label>Disease</Label>
              <Input value={this.state.disease} onChangeText={(text)=>this.changeHandler(text, "disease")} />
            </Item>

            <Item  floatingLabel >
              <Label>Medication</Label>
              <Input value={this.state.medication} onChangeText={(text)=>this.changeHandler(text, "medication")} />
            </Item>

            <Item floatingLabel last>
              <Label>Cost</Label>
              <Input value={this.state.cost} onChangeText={(text)=>this.changeHandler(text, "cost")} />
            </Item>
            <Button full primary onPress={this.submitHandler} ><Text> Submit </Text></Button>

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



const mapDispatchToProps = (dispatch) => {
  return{
    addNewPatient:(payload)=>dispatch(patientAction.addData(payload))
  }
}

export default connect(null, mapDispatchToProps)(AddPatient)