import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import {Link} from 'react-router-dom';

class Footer extends Component {

  render() {

    return (
      <div>
        <Navbar color="faded" light expand="md" className='ml-3'>
          <Link to={'/managerlogin'}>Manager Login</Link>
        </Navbar>
      </div>

    );
  }
}

export default Footer;
