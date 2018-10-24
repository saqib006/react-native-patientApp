import React, { Component } from 'react';
import { List, ListItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import {connect} from 'react-redux';
import patientAction from '../store/action/index';
import {Link} from 'react-router-native';
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
    patientList:state.patientReducer.patients
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    getList:()=>{return dispatch(patientAction.getData())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)