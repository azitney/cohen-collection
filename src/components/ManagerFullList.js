import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupButton,
  Table
} from 'reactstrap';
import {connect} from 'react-redux';
import ManagerItem from './ManagerItem';
import {Link} from 'react-router-dom';

class ManagerFullList extends Component {
  state = {
    itemSearch: '',
    itemSort: '',
    seach: false
  }
  handleSearchSubmit = (e) => {
    this.setState({search: true})
  }
  handleSearch = (e) => {
    e.preventDefault()
    this.setState({search: false})
    this.setState({itemSearch: e.target.value})
  }
  handleSortChange = (e) => {
    this.setState({itemSort: e.target.value})
  }

  render() {
    console.log(this.props.match.params.filter)

    let filteredItems = this.props.items.filter((item) => item.status == this.props.match.params.filter)
    console.log(filteredItems)

    let searchedItems = this.state.search
      ? filteredItems.filter((item) => {
        if (item.title.includes(this.state.itemSearch) || item.tags.includes(this.state.itemSearch) || item.description.includes(this.state.itemSearch)) {
          return item;
        }
      })
      : filteredItems;

    let sortedItems = this.state.itemSort === 'price low to high'
      ? searchedItems.sort((a, b) => b.price - a.price)
      : this.state.itemSort === 'price high to low'
        ? searchedItems.sort((a, b) => a.price - b.price)
        : this.state.itemSort === 'title a to z'
          ? searchedItems.sort(
            (a, b) => a.title.toUpperCase() < b.title.toUpperCase()
            ? -1
            : 1)
          : searchedItems.sort(
            (a, b) => b.title.toUpperCase() < a.title.toUpperCase()
            ? -1
            : 1)

    let fullList = sortedItems.map((item) =>< ManagerItem key = {
      item.id
    }
    item = {
      item
    } />)

    return (<div>
      <nav className='border secondary-nav'>
        <ul >
          <Link to={'/manageitems/forsale'}>
            <li >For Sale</li>
          </Link>
          <Link to={'/manageitems/onhold'}>
            <li>On Hold</li>
          </Link>
          <Link to={'/manageitems/sold'}>
            <li>Sold</li>
          </Link>
        </ul>
      </nav>
      <div className='itemSearch'>
        <Container className='pl-5'>
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
                <InputGroupButton>
                  <Button onClick={this.handleSearchSubmit}>Search For Item</Button>
                </InputGroupButton>
              </InputGroup>
            </Col>
            <Col>
              <Link to={'/manageradditem'}>
                <Button>Add Item</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div>

        <Container className='pl-5 pr-5'>
          <Row>
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>Title and Description</th>
                  <th>Tags</th>
                  <th>Price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {fullList}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </div>);
  }
}

function mapStateToProps(store, thisComponentsProps) {
  return {items: store.items}
}

export default connect(mapStateToProps, null)(ManagerFullList);
