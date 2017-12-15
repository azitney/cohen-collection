import React, { Component } from 'react';
import {  Card, CardImg, CardTitle,
 CardSubtitle, CardBody, Button } from 'reactstrap';
import { addItem } from '../actions/shoppingcart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

class Item extends Component {

  handleAddToCart = (e) => {
    this.props.addItem(e.target.id)
  }

  render() {

    return (
      
      <div>
        <Card className='item-card rounded-0 text-left'>
          <CardImg top width="200px" height='250px' src={`${this.props.item.primary_photo}`} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.item.title}</CardTitle>
            <CardSubtitle>${(this.props.item.price/100).toFixed(2)}</CardSubtitle>
            <br></br>
            <Link className='item-button' to={`/item/${this.props.item.id}`}>
            <a id={this.props.item.id}>Details</a></Link>
            <span className='item-button'><a onClick={this.handleAddToCart} id={this.props.item.id}>Add To Cart</a></span>
          </CardBody>
        </Card >
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    addItem: bindActionCreators(addItem, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Item);
