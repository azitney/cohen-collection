import React, {Component} from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import {addItem} from '../actions/items';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ManagerAdd extends Component {

  state = {
    title: '',
    description: '',
    price: 0,
    tags: [],
    primary_photo: '',
    status: ''
  }

  handleChange = (e) => {
    console.log('handleChang', e.target.value)
    console.log('state', this.state)
    if (e.target.id == 'title') {
      this.setState({title: e.target.value})
    } else if (e.target.id == 'description') {
      this.setState({description: e.target.value})
    } else if (e.target.id == 'price') {
      this.setState({price: e.target.value})
    } else if (e.target.id == 'primary_photo') {
      this.setState({primary_photo: e.target.value})
    } else if (e.target.id == 'status') {
      this.setState({status: e.target.value})
    } else {
      this.setState({
        tags: this.state.tags.concat(e.target.value)
      })
    }
  }

  handleSubmit = (e) => {
    let newItem = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      tags: JSON.stringify(this.state.tags),
      primary_photo: this.state.primary_photo,
      status: this.state.status
    }
    console.log('newItem', newItem)
    this.props.addItem(newItem)
  }

  render() {

    return (<div>
      <Container>
        <h2 className='text-center'>Add Item</h2>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title}/>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input onChange={this.handleChange} type="textarea" name="description" id="description" value={this.state.description}/>
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input onChange={this.handleChange} type="number" name="price" id="price" value={this.state.price}/>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Status</legend>
            <FormGroup check="check">
              <Label check="check">
                <Input id="status" onChange={this.handleChange} value='forsale' type="radio" name="status"/>{'For Sale '}
              </Label>
            </FormGroup>
            <FormGroup check="check">
              <Label check="check">
                <Input id="status" onChange={this.handleChange} value='sold' type="radio" name="status"/>{'Sold '}
              </Label>
            </FormGroup>
            <FormGroup check="check">
              <Label check="check">
                <Input id="status" onChange={this.handleChange} value='onhold' type="radio" name="status"/>{'On Hold '}
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Tags</legend>
            <FormGroup check="check">
              <Label check="check">
                <Input onChange={this.handleChange} type="checkbox" name="sports" value='sports'/>{'Sports '}
              </Label>
            </FormGroup>
            <FormGroup check="check">
              <Label check="check">
                <Input onChange={this.handleChange} value='artists' type="checkbox" name="artists"/>{'Artists'}
              </Label>
            </FormGroup>
            <FormGroup check="check">
              <Label check="check">
                <Input onChange={this.handleChange} type="checkbox" value='movies' name="movies"/>{'Movies'}
              </Label>
            </FormGroup>
            <FormGroup check="check">
              <Label check="check">
                <Input onChange={this.handleChange} type="checkbox" value='sale' name="sale"/>{'Sale'}
              </Label>
            </FormGroup>
            <FormGroup check="check">
              <Label check="check">
                <Input onChange={this.handleChange} type="checkbox" value='pittsburgh' name="pittsburgh"/>{'Pittsburgh'}
              </Label>
            </FormGroup>
            <FormGroup check="check">
              <Label check="check">
                <Input onChange={this.handleChange} type="checkbox" value='autographed' name="autographed"/>{'Autographed'}
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="photo_url">Photo_URL</Label>
            <Input onChange={this.handleChange} type="text" name="photo_url" id="primary_photo"/>
          </FormGroup>
          <Button onClick={this.handleSubmit}>Add Item
          </Button>
          <Button>
            <Link className='return-button' to={'/manageitems/forsale'}>Return Home</Link>
          </Button>
        </Form>
      </Container>
    </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: bindActionCreators(addItem, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ManagerAdd);
