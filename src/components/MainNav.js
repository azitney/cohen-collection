import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Badge } from 'reactstrap';
import {Link} from 'react-router-dom';
import Logo from '../media/logo.jpg';
import {connect} from 'react-redux';

class MainNav extends Component {

  render() {

    return (

      <Navbar className='mainNav' color="faded" light expand="md">
        <Link to={'/'}><img className='logo' src={`${Logo}`}/></Link>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to={'/cart'}><i className="material-icons md-48 ">shopping_cart</i></Link>
            <span className='pb-2'><Badge  color="secondary">{this.props.shoppingcart.length}</Badge></span>
          </NavItem>
        </Nav>
      </Navbar>

    );
  }
}

function mapStateToProps(store, thisComponentsProps){
  return{
    shoppingcart: store.shoppingcart
  }
}

export default connect(mapStateToProps, null)(MainNav);
