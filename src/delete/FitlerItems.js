import React, { Component } from 'react';
import { CardDeck, Container, Row, Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupButton } from 'reactstrap';
import {connect} from 'react-redux';
import Item from './Item';
import {Link} from 'react-router-dom';

class ItemList extends Component {
  state={
    itemFilter: [],
    itemSearch: '',
    itemSort: '',
    seach: false,
    filter: false
  }
  handleSearchSubmit = (e) =>{
    this.setState({search: true})
  }
  handleSearch = (e) => {
    e.preventDefault()
    this.setState({search: false})
    this.setState({itemSearch: e.target.value})
  }
  handleSortChange = (e) =>{
    this.setState({itemSort: e.target.value})
  }

  handleFilter = (e) => {
    if(!this.state.itemFilter.includes(e.target.value)){
      this.setState({itemFilter: this.state.itemFilter.concat([e.target.value])})
    }
  }
  handleFilterSubmit = (e) => {
    this.setState({filter: true})
  }
  render() {

    return (
      <div>
        <Container>
          <Row>
            <Col xs="3">
              <Form className='filterItems text-left'>
                <FormGroup tag="fieldset">
                  <legend>Filter Items</legend>
                  <FormGroup check>
                    <Label check>
                      <Input onClick={this.handleFilter} value='sports' type="radio" name="sports" />{'Sports '}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input onClick={this.handleFilter} value='music' type="radio" name="music" />{' '}
                      Music
                    </Label>
                  </FormGroup>
                  <FormGroup check >
                    <Label check>
                      <Input onClick={this.handleFilter} value='autographed' type="radio" name="autographed"  />{' '}
                      Autographed
                    </Label>
                  </FormGroup>
                  <FormGroup check >
                    <Label check>
                      <Input onClick={this.handleFilter} value='sale' type="radio" name="sale"  />{' '}
                      Sale
                    </Label>
                  </FormGroup>
                </FormGroup>
                <Button onClick={this.handleFilterSubmit}>Filter</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(store, thisComponentsProps){
  return{
    items: store.items
  }
}

export default connect(mapStateToProps, null)(ItemList);
