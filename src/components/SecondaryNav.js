import React, {Component} from 'react';
import {Jumbotron, Container} from 'reactstrap';
import {Link} from 'react-router-dom';

class SecondaryNav extends Component {

  render() {
    return (<div>

      <Jumbotron fluid="fluid" id='jumbotron'>
        <Container fluid="fluid">
          <div className="filler one"></div>
        </Container>
      </Jumbotron>
      <nav className='secondary-nav'>
        <ul>
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/items'}>
            <li>Shop</li>
          </Link>
          <Link to={'/cart'}>
            <li>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>);
  }
}

export default SecondaryNav;
