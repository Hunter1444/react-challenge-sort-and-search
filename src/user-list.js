import React, { Component } from 'react';
import UserData from './user-data.js';
import ActiveUser from './active-user.js';
import {connect} from 'react-redux';

class UserList extends Component{
  constructor (props) {
    super(props)
    this.state = { data: this.props.humanList[0] }
  }

  changeActiveUser(numb) {
    this.setState({
      data: this.props.humanList[numb]
    })
  }


  render(){
    let self = this;
    let propList = this.props.humanList;
    let humanList = [];
    if(propList !== ''){
      humanList = this.props.humanList.map(function(item, index){
        let src = '';
        switch(item.image){
          case 'lion': src = 'img/lion.svg'
          break;
          case 'cat': src = 'img/cat.svg'
          break;
          case 'dog': src = 'img/dog.svg'
          break;
          case 'fox': src = 'img/fox.svg'
          break;
          case 'koala': src = 'img/koala.svg'
          break;
          case 'owl': src = 'img/owl.svg'
          break;
          case 'penguin': src = 'img/penguin.svg'
          break;
          case 'pig': src = 'img/pig.svg'
          break;
          case 'raccoon': src = 'img/raccoon.svg'
          break;
          case 'react': src = 'img/react.svg'
          break;
          case 'sheep': src = 'img/sheep.svg'
          break;
          default: src='img/react.svg'
          break;
        }
        if(item.display !== 'none'){
          return(
              <UserData number={index} changeActiveUser = {self.changeActiveUser.bind(self)} key={index} avatar={src} age={item.age} phone={item.phone} name={item.name}/>
          )
        }
        return false;
      })
    }

    return(
      <div className = "user-list__wrapper">
        <div className = "user-list">
          {humanList}
        </div>
        <ActiveUser data={this.state.data}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    humanList: state
  }),
  dispatch => ({
    addHuman: (humanName) =>{
      dispatch({ type: 'ADD_HUMAN', payload: humanName});
    }
  })
)(UserList)
