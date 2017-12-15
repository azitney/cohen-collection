import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import Instagram from 'react-icons/lib/fa/instagram';
import Facebook from 'react-icons/lib/fa/facebook-official';
import Twitter from 'react-icons/lib/fa/twitter';

class SocialMedia extends Component {

  render() {
    return (<div>
      <ListGroup >
        <ListGroupItem className='rounded-0' tag="a" href="https://www.facebook.com/CohensCollectiblesandMore/" action="action" id="socialLogos"><Facebook/></ListGroupItem>
        <ListGroupItem tag="a" href="#" action="action" id="socialLogos"><Twitter/></ListGroupItem>
        <ListGroupItem className='rounded-0' tag="a" href="https://www.instagram.com/cohenscollectibles/?hl=en" action="action" id="socialLogos"><Instagram/></ListGroupItem>
      </ListGroup>
    </div>);
  }
}

export default SocialMedia;
