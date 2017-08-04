import React, { Component } from 'react';
import {connect} from 'react-redux';

class Toolbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      sortOrder : 'Z-A',
      sortAge: '0-100'
    }
  }
  sortByOrder(e){
    e.preventDefault();

    if(this.state.sortOrder === 'Z-A'){
     this.setState({ sortOrder: 'A-Z'});

     let orderSort = this.props.humanList.sort(function(a, b){
       if(a.name[0] < b.name) return -1;
       if(a.name[0] > b.name[0]) return 1;
       return 0;

     })

     this.props.sortByOrder(orderSort);
    }

    else if(this.state.sortOrder === 'A-Z'){
      this.setState({ sortOrder: 'Z-A'})

      let orderSort = this.props.humanList.sort(function(a, b){
        if(a.name[0] < b.name) return 1;
        if(a.name[0] > b.name[0]) return -1;
        return 0;
      })

      this.props.sortByOrder(orderSort);
    }
  }

  sortByAge(e){
    e.preventDefault();

    if(this.state.sortAge === '0-100'){
     this.setState({ sortAge: '100-0'});

     let orderSort = this.props.humanList.sort(function(a, b){

       return Number(a.age) - Number(b.age)

     })

     this.props.sortByAge(orderSort);
    }

    else if(this.state.sortAge === '100-0'){
      this.setState({ sortAge: '0-100'})

      let orderSort = this.props.humanList.sort(function(a, b){
        return Number(b.age) - Number(a.age)
      })

      this.props.sortByAge(orderSort);
    }
  }

  render(){
    return(
      <div className="tool-bar">
        <button onClick={this.sortByOrder.bind(this)} className="tool-bar__sort tool-bar__sort_age">Sort in alphabet order</button>
        <button onClick={this.sortByAge.bind(this)} className="tool-bar__sort tool-bar__sort_order">Sort by age</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    humanList: state
  }),
  dispatch => ({
    sortByOrder: (orderSort) =>{
      dispatch({ type: 'ORDER_SORT', payload: orderSort});
    },

    sortByAge: (orderAge) =>{
      dispatch({ type: 'ORDER_SORT', payload: orderAge});
    }
  })
)(Toolbar)
