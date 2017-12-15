import React, { Component } from 'react';
import { CardDeck, Container, Row, Col, Button, FormGroup, Input, InputGroup, InputGroupButton } from 'reactstrap';
import {connect} from 'react-redux';
import Item from './Item';
import SecondaryNav from './SecondaryNav';
import SocialMedia from './SocialMedia';
import SideNav from './SideNav';
import Location from './Location';

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

    let itemsforsale = this.props.items.filter((item)=>item.status == 'forsale');

    let searchedItems = this.state.search? itemsforsale.filter((item)=>{
      if(item.title.includes(this.state.itemSearch) || item.tags.includes(this.state.itemSearch) || item.description.includes(this.state.itemSearch)){
        return item;
      }
    }) : itemsforsale;

    let sortedItems = this.state.itemSort === 'price low to high'? searchedItems.sort((a,b)=> b.price - a.price) : this.state.itemSort === 'price high to low'? searchedItems.sort((a,b)=> a.price - b.price) : this.state.itemSort === 'title a to z' ? searchedItems.sort((a,b)=> a.title.toUpperCase() < b.title.toUpperCase()? -1 : 1) : searchedItems.sort((a,b)=> b.title.toUpperCase() < a.title.toUpperCase()? -1 : 1)

    let filterItems = this.props.match.params.filter? sortedItems.filter((item)=>{
      if(item.tags.includes(this.props.match.params.filter)){
        return item;
      }
    }) : sortedItems

    let fullList = filterItems.map((item)=><Item key={item.id} item={item}/>)

    return (

      <div>
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
            <div className='itemSearch'>
              <Container>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input type="select" name="select" id="exampleSelect" onChange={this.handleSortChange}>
                        <option>Sort By</option>
                        <option value='price low to high'>Price: High to Low</option>
                        <option value='price high to low'>Price: Low to High</option>
                        <option value='title a to z'>Title: A to Z</option>
                        <option value='title z to a'>Title: Z to A</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <InputGroup>
                      <Input value={this.state.itemSearch} onChange={this.handleSearch}/>
                      <InputGroupButton><Button onClick={this.handleSearchSubmit}>Search For Item</Button></InputGroupButton>
                    </InputGroup>
                  </Col>
                </Row>
              </Container>
            </div>
            <Container>
              <Row>
                <Col>
                  <div className='catagory2'>
                    <CardDeck className='spacing'>
                      {fullList}
                    </CardDeck>
                    <br></br>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
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
