import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';







class SideNav extends Component {

  render() {
    return (
              <ListGroup>
                <ListGroupItem className='rounded-0' tag="a" href="#" action><Link className='side-links' to={`/items/sports`}>Sports</Link></ListGroupItem>
                <ListGroupItem tag="a" href="#" action><Link to={`/items/pittsburgh`} className='side-links'>Pittsburgh</Link></ListGroupItem>
                <ListGroupItem tag="a" href="#" action><Link className='side-links' to={`/items/artists`}>Artist</Link></ListGroupItem>
                <ListGroupItem tag="a" href="#" action><Link className='side-links' to={`/items/movies`}>Movies</Link></ListGroupItem>
                <ListGroupItem tag="a" href="#" action><Link className='side-links' to={`/items/autographed`}>Autographed</Link></ListGroupItem>
                <ListGroupItem className='rounded-0' tag="a" href="#" action><Link className='side-links' to={`/items/sale`}>Sale</Link></ListGroupItem>
              </ListGroup>




    );
  }
}

export default SideNav;
