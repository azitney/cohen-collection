import React, { Component } from 'react';
import {  Col, Container, Row,
 Button } from 'reactstrap';
 import {Link} from 'react-router-dom';

class Catagories extends Component {

  render() {
    
    return (
      <div className='catagory'>
        <Container>
          <h2 className='headers'>Shop Our Most Popular Catagories</h2>
          <Row>
            <Col>
              <div className='circleIconMusic'>
                <div className='onhover'>
                <br></br>
                <br></br>
                <h2 className='pt-5 somethingheaders'>Artists</h2>
                  <Link className='cat-button' to={`/items/artists`}>
                  Shop</Link>
                </div>
              </div>
            </Col>
            <Col>
              <div className='circleIconSign'>
                <div className='onhover'>
                <br></br>
                <br></br>
                <h2 className='pt-5 somethingheaders'>Autographed</h2>
                  <Link className='cat-button' to={`/items/autographed`}>
                  Shop</Link>
                </div>
              </div>
            </Col>
            <Col>
              <div className='circleIconSports'>
                <div className='onhover'>
                <br></br>
                <br></br>
                <h2 className='pt-5 somethingheaders'>Sale</h2>
                  <Link className='cat-button' to={`/items/sale`}>
                  Shop</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Catagories;
