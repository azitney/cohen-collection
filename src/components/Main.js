import React, { Component } from 'react';
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
          <Col className=' features-sidenav pr-0' sm="2">
            <div className = "sideNavHeader">Catagories</div>
            <SideNav />
            <div className = "sideNavHeader">Contact</div>
            <Location />
            <div className = "sideNavHeader">Get Social</div>
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
