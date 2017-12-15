import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  Card, CardImg, CardTitle,
 CardSubtitle, CardBody, Button, Row, Col, Container } from 'reactstrap';
import SecondaryNav from './SecondaryNav';
import LocationCarousel from './LocationCarousel';
import SimilarItems from './SimilarItems';
import {Link} from 'react-router-dom';
import { addItem } from '../actions/shoppingcart';
import { bindActionCreators } from 'redux';






class ItemPage extends Component {
  handleAddToCart = (e) => {
    this.props.addItem(e.target.id)
  }

  render() {
    let item = (this.props.items.filter((item) => item.id == this.props.match.params.id))[0];

    return (

      <div>
        <SecondaryNav />
        <br></br>
        <Row>
          <Col>
            <Container>
              <div class = "detailImage">
            <img height='50%' width='auto' src={(this.props.items.filter((item) => item.id == this.props.match.params.id)).length > 0? `${item.primary_photo}` : 'No Title'}/>
            </div>
            </Container>
          </Col>
          <Col>
            <div class = "detailText">
            <h2>{(this.props.items.filter((item) => item.id == this.props.match.params.id)).length > 0? item.title : 'No Title'}</h2>
            <p>{(this.props.items.filter((item) => item.id == this.props.match.params.id)).length > 0? item.description : 'No Description'}</p>
            <p>${(((this.props.items.filter((item) => item.id == this.props.match.params.id)).length > 0? item.price : 0 )/100).toFixed(2)}</p>
            <span className='item-button'><a onClick={this.handleAddToCart} id={this.props.match.params.id}>Add To Cart</a></span></div>
          </Col>
        </Row>
        <br></br>
        <br></br>
          <SimilarItems />
          <br></br>
          <br></br>
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


export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
