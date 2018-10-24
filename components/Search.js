
import React, { Component } from 'react';
import {List, ListItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input, Label } from 'native-base';
import {connect} from 'react-redux';
import patientAction from '../store/action/index';
import { Link } from'react-router-native';

class Search extends Component {

    constructor(props){
      super(props);

      this.state = {
        search:''
      }

     
    }


    

    changeHandler = (text, name) => {
        let obj = {}
        obj[name] = text
        this.setState(obj)

        
        let obj2 = {
          type:'name',
          text:text,
        }
        
        this.props.search(obj2)
        
       
    }

    searchHandler = () => {
      let obj = {
        type:'name',
        text:this.state.search,
      }

      this.props.search(obj)

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
        
            <Item floatingLabel >
              <Label>Search</Label>
              <Input onChangeText={(text)=>this.changeHandler(text, "search")} value={this.state.search}/>
              <Icon name='search' />
           
          
            </Item>
           
          

        

        <List>{
            this.props.searchList.map(value=>{
                return(
                <ListItem key={value._id}>
                <Left>
                    <Text>{value.name}</Text>
                  </Left>
                  <Right>
                  <Link to={{
                    pathname:"/viewpatient",
                    state:value
                  }}>
                    <Icon name="arrow-forward" />
                    </Link>
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

const mapStateToProps = (state) => {
  return{
    searchList:state.patientReducer.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    search:(payload)=>dispatch(patientAction.searchPatient(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)