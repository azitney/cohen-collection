import React, { Component } from 'react';
import {  Container,
 Card, CardImg, CardTitle,
 CardSubtitle, CardBody, CardDeck } from 'reactstrap';
import {connect} from 'react-redux';
import { addItem } from '../actions/shoppingcart';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';



class Featured extends Component {

  handleAddToCart = (e) => {
    this.props.addItem(e.target.id)
  }
  render() {

    let itemone = this.props.items[Math.floor((Math.random() * this.props.items.length))]
    let filteritemone = this.props.items.filter((item)=> item.id != itemone.id)
    let itemtwo = filteritemone[Math.floor((Math.random() * filteritemone.length))]
    let filteritemtwo = filteritemone.filter((item)=> item.id != itemtwo.id)
    let itemthree = filteritemtwo[Math.floor((Math.random() * filteritemtwo.length))]

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
                <Link className='item-button' to={`/item/${itemone? itemone.id : ' '}`}>
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
                <Link className='item-button' to={`/item/${itemtwo? itemtwo.id : ' '}`}>
                <a id={itemtwo? itemtwo.id : ' '}>Details</a></Link>
                <span className='item-button'><a onClick={this.handleAddToCart} id={itemtwo? `${itemtwo.id}` : ' '}>Add To Cart</a></span>
              </CardBody>
            </Card >
            <Card className='item-card rounded-0 text-left'>
              <CardImg top width="200px" height='250px' src={itemthree ? `${itemthree.primary_photo}` : ' '} alt="Card image cap" />
              <CardBody>
                <CardTitle>{itemthree? itemthree.title : ' '}</CardTitle>
                <CardSubtitle>${itemthree? (itemthree.price/100).toFixed(2) : ' '}</CardSubtitle>
                <br></br>
                <Link className='item-button' to={`/item/${itemthree? itemthree.id : ' '}`}>
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

function mapDispatchToProps(dispatch){
  return{
    addItem: bindActionCreators(addItem, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
