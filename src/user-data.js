import React, { Component } from 'react';

export default class UserData extends Component{

  render(){
    return(
      <div onClick = {this.props.changeActiveUser.bind(null, this.props.number)} className="user-list__item">
        <img alt="Фото" className="user-list__image" src={this.props.avatar}/>
        <span className="user-list__name">{this.props.name}</span>
        <span className="user-list__age">{this.props.age}</span>
        <span className="user-list__phone">{this.props.phone}</span>
      </div>
    )
  }
}
