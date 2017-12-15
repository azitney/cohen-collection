import React, { Component } from 'react';
import FeaturedProducts from './FeaturedProducts';
import Catagories from './Catagories';
import Location from './Location';
import SecondaryNav from './SecondaryNav';
import Featured from './Featured';
import SocialMedia from './SocialMedia';
import SideNav from './SideNav';
import { Col, Row } from 'reactstrap';


class Main extends Component {
  render() {
    return (
      <div >
        <Row>
        <Col className='features-sidenav pr-0' sm="2">
          <div class = "sideNavHeader">Catagories</div>
          <SideNav />
          <div class = "sideNavHeader">Contact</div>
          <Location />
          <div class = "sideNavHeader">Get Social</div>
          <SocialMedia />
        </Col>
        <Col className='features pr-0 pl-0' sm='10'>
        <SecondaryNav />
        <Featured />
        <Catagories />
        </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
