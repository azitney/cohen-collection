import React, { Component } from 'react';
import { removeCartItem } from '../actions/shoppingcart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class CartItem extends Component {
  handleRemoveFromCart = (e) =>{
    console.log(e.target.id)
    this.props.removeCartItem(e.target.id)
  }
  render() {

    return (
        <tr>
          <th scope="row"><img height='50px' width='50px' src={`${this.props.item.primary_photo}`}/></th>
          <td>{this.props.item.title}</td>
          <td>${(this.props.item.price/100).toFixed(2)}</td>
          <td><i id={this.props.item.id} onClick={this.handleRemoveFromCart} className="material-icons">delete</i></td>
        </tr>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeCartItem: bindActionCreators(removeCartItem, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
