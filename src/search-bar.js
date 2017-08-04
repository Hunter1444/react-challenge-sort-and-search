import React, { Component } from 'react';
import {connect} from 'react-redux';

class SearchBar extends Component{

  changeHandler(e){
    let eValue = e.target.value;
    let newArray = [];
    this.props.humanList.map((item, index) => {
      if(item.name.toUpperCase().search(eValue.toUpperCase()) === -1){
        item.display = "none"
      }
      else{
        item.display = "block"
      }
      newArray.push(item)
      return true;
    })
    this.props.indexSort(newArray)
  }

  render(){
    return(
      <input className="search-bar" onChange={this.changeHandler.bind(this)} placeholder="Search in here..." type="text"/>
    )
  }
}

export default connect(
  state => ({
    humanList: state
  }),

  dispatch => ({
    indexSort: (indexSort) =>{
      dispatch({ type: 'INDEX_SORT', payload: indexSort});
    },
  })
)(SearchBar);
