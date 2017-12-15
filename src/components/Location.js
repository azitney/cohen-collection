import React, { Component } from 'react';
import { Collapse, Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';



class Location extends Component {
  constructor(props) {
    super(props);
    this.toggleone = this.toggleone.bind(this);
    this.state = { collapseone: false };
    this.toggletwo = this.toggletwo.bind(this);
    this.state = { collapsetwo: false };
    this.togglethree = this.togglethree.bind(this);
    this.state = { collapsethree: false };
  }

  toggleone() {
    this.setState({ collapseone: !this.state.collapseone });
  }

  toggletwo() {
    this.setState({ collapsetwo: !this.state.collapsetwo });
  }

  togglethree() {
    this.setState({ collapsethree: !this.state.collapsethree });
  }

  render() {
    return (


        <div>
              <ListGroup>
                <ListGroupItem className='rounded-0' tag="button" action onClick={this.toggleone}>Address</ListGroupItem>
                  <Collapse isOpen={this.state.collapseone}>
                    <Card>
                      <CardBody>
                      <p>1124 S Braddock Ave</p>
                      <p>Pittsburgh, PA 15218</p>
                      </CardBody>
                    </Card>
                  </Collapse>
                <ListGroupItem tag="button" action onClick={this.toggletwo}>Phone</ListGroupItem>
                  <Collapse isOpen={this.state.collapsetwo}>
                    <Card>
                      <CardBody>
                      <p>(412) 418-6576</p>
                      </CardBody>
                    </Card>
                  </Collapse>
                <ListGroupItem className='rounded-0' tag="button" action onClick={this.togglethree}>Store Hours</ListGroupItem>
                  <Collapse isOpen={this.state.collapsethree}>
                    <Card>
                      <CardBody>
                        <p>Mon: Closed</p>
                        <p>Tues - Sat: 11:00 - 7:00</p>
                        <p>Sun: 11:00 - 3:00</p>
                      </CardBody>
                    </Card>
                  </Collapse>
       </ListGroup>

        </div>


    );
  }
}

export default Location;
