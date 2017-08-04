import React, { Component } from 'react';

export default class ActiveUser extends Component{

  render(){
    if(this.props.data !== undefined){
      let src = '';
      switch(this.props.data.image){
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
      return(
          <div className="active-user">
            <img alt="Фото" className="active-user__img" src={src} />

            <div className="active-user__item">
              <span>Name</span>
              <span className="active-user__name">{this.props.data.name}</span>
            </div>

            <div className="active-user__item">
              <span>Phone</span>
              <span className="active-user__phone">{this.props.data.phone}</span>
            </div>

            <div className="active-user__item">
              <span>Animal</span>
              <span className="active-user__animal">{this.props.data.image}</span>
            </div>
            <p className="active-user__phrase"><b>Коронная фраза:</b>{this.props.data.phrase}</p>
          </div>
      )
    }
    else{
      return(
        <div></div>
      )
    }
  }
}
