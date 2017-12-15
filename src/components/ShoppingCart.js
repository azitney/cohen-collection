import React, {Component} from 'react';
import {Table, Container, Row, Col, Button} from 'reactstrap';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import SecondaryNav from './SecondaryNav';
import SocialMedia from './SocialMedia';
import SideNav from './SideNav';
import Location from './Location';

class ShoppingCart extends Component {

  render() {

    let cartitems = this.props.shoppingcart.map((item) =>< CartItem key={item.id} item={item} />)
    let subtotal = this.props.shoppingcart.reduce((accu, item) => accu += item.price, 0)

    return (<div>
      <Row>
        <Col className='features-sidenav pr-0' sm="2">
          <div class="sideNavHeader">Catagories</div>
          <SideNav/>
          <div class="sideNavHeader">Contact</div>
          <Location/>
          <div class="sideNavHeader">Get Social</div>
          <SocialMedia/>
        </Col>
        <Col className='features pr-0 pl-0' sm='10'>
          <SecondaryNav/>
          <Container>
            <Row>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Item</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartitems}
                  </tbody>
                </Table>
              </Col>
              <Col>
                <div className="totals">
                  <h2 class="yourCart">Your Cart</h2>
                  <p>Subtotal: ${(subtotal / 100).toFixed(2)}</p>
                  <p>Tax: ${((subtotal * .086) / 100).toFixed(2)}</p>
                  <p>Shipping: $10.00
                  </p>
                  <h4>Total: ${((subtotal * 1.086 + 1000) / 100).toFixed(2)}</h4>
                  <Button>Check Out</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

    </div>);
  }
}

function mapStateToProps(store, thisComponentsProps) {
  console.log(store);
  return {shoppingcart: store.shoppingcart}
}

export default connect(mapStateToProps, null)(ShoppingCart);
