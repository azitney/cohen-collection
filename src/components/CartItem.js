import React, { Component } from 'react';



class CartItem extends Component {
  render() {


    return (

        <tr>
          <th scope="row"><img height='50px' width='50px' src={`${this.props.item.primary_photo}`}/></th>
          <td>{this.props.item.title}</td>
          <td>${(this.props.item.price/100).toFixed(2)}</td>
        </tr>

    );
  }
}



export default CartItem;
