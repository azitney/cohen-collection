import React, { Component } from 'react';
import {  Col, Container, Row,
 Button, Card, CardImg, CardTitle,
  CardSubtitle, CardBody, CardDeck } from 'reactstrap';
import {connect} from 'react-redux';
import { addItem } from '../actions/shoppingcart';
import {Link} from 'react-router-dom';


class Featured extends Component {

  handleAddToCart = (e) => {
    this.props.addItem(e.target.id)
  }

  render() {

    let itemone = this.props.items[Math.floor((Math.random() * this.props.items.length))]
    let itemtwo = this.props.items[Math.floor((Math.random() * this.props.items.length))]
    let itemthree = this.props.items[Math.floor((Math.random() * this.props.items.length))]
    console.log(itemone, itemtwo, itemthree)
    return (
      <div className='catagory'>
        <Container>
          <h2 className='headers'>Shop Our Featured Products</h2>
          <CardDeck >
            <Card className='item-card rounded-0 text-left'>
              <CardImg top width="200px" height='250px' src={itemone? `${itemone.primary_photo}` : ' '} alt="Card image cap" />
              <CardBody>
                <CardTitle>{itemone? itemone.title : ' '}</CardTitle>
                <CardSubtitle>${itemone? (itemone.price/100).toFixed(2) : ' '}</CardSubtitle>
                <br></br>
                  <Link className='item-button' to={'/'}>
                  <a id={itemone? itemone.id : ' '}>Details</a></Link>
                  <span className='item-button'><a onClick={this.handleAddToCart} id={itemone? itemone.id : ' '}>Add To Cart</a></span>
              </CardBody>
            </Card >
            <Card className='item-card rounded-0 text-left'>
              <CardImg top width="200px" height='250px' src={itemtwo? `${itemtwo.primary_photo}`: ' '} alt="Card image cap" />
              <CardBody>
                <CardTitle>{itemtwo? itemtwo.title : ' '}</CardTitle>
                <CardSubtitle>${itemtwo? (itemtwo.price/100).toFixed(2) : ' '}</CardSubtitle>
                <br></br>
                  <Link className='item-button' to={'/'}>
                  <a id={itemthree? itemtwo.id : ' '}>Details</a></Link>
                  <span className='item-button'><a onClick={this.handleAddToCart} id={itemtwo? itemtwo.id : ' '}>Add To Cart</a></span>
              </CardBody>
            </Card >
            <Card className='item-card rounded-0 text-left'>
              <CardImg top width="200px" height='250px' src={itemthree ? `${itemthree.primary_photo}` : ' '} alt="Card image cap" />
              <CardBody>
                <CardTitle>{itemthree? itemthree.title : ' '}</CardTitle>
                <CardSubtitle>${itemthree? (itemthree.price/100).toFixed(2) : ' '}</CardSubtitle>
                <br></br>
                <Link className='item-button' to={'/'}>
                <a id={itemthree? itemthree.id : ' '}>Details</a></Link>
                <span className='item-button'><a onClick={this.handleAddToCart} id={itemthree? itemthree.id : ' '}>Add To Cart</a></span>
              </CardBody>
            </Card >

          </CardDeck>
        </Container>
      </div>

    );
  }
}

function mapStateToProps(store, thisComponentsProps){
  return{
    items: store.items
  }
}

export default connect(mapStateToProps, null)(Featured);
