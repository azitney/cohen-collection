import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Button, Form, Row} from 'reactstrap';
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {editItem} from '../actions/items';
import {Link} from 'react-router-dom';

class ManagerEdit extends Component {
  editItem = (values) => {
    let newItem = {
      id: values.id,
      title: values.title,
      description: values.description,
      tags: JSON.stringify(values.tags),
      primary_photo: values.primary_photo,
      status: values.status
    }
    this.props.editItem(newItem)
  }

  render() {
    const {handleSubmit} = this.props
    console.log('this.props in edit', this.props)
    let Alltags = [
      'sports',
      'artists',
      'movies',
      'autographed',
      'sale',
      'pittsburgh'
    ]
    let tagList = this.props.initialValues
      ? Alltags.map(
        (tag) => this.props.initialValues.tags.includes(tag)
        ? <div>
          <label><Field checked="checked" name={tag} component='input' type="checkbox" value={tag}/> {tag}</label>
        </div>
        : <div>
          <label><Field name={tag} component='input' type="checkbox" value={tag}/> {tag}</label>
        </div>)
      : ' ';

    let allStatus = ['forsale', 'onhold', 'sold'];
    let statusList = this.props.initialValues
      ? allStatus.map(
        (status) => this.props.initialValues.status == status
        ? <div>
          <label><Field checked="checked" name="status" component="input" type="radio" value={status}/>{status}</label>
        </div>
        : <div>
          <label><Field name="status" component="input" type="radio" value={status}/>{status}</label>
        </div>)
      : '';

    return (<div>
      <Container>
        <h2 className='text-center'>Edit Item</h2>
        <Form onSubmit={handleSubmit(this.editItem)}>
          <div>
            <Row>
              <label htmlFor="title">Title</label>
            </Row>
            <Row>
              <Field name="title" component="input" type="text"/>
            </Row>
          </div>
          <div>
            <Row>
              <label htmlFor="description">Description</label>
            </Row>
            <Row>
              <Field name="description" component="input" type="textarea"/>
            </Row>
          </div>
          <div>
            <Row>
              <label htmlFor="price">Price</label>
            </Row>
            <Row>
              <Field name="price" component="input" type="text"/>
            </Row>
          </div>
          <div>
            <label>Status</label>
            {statusList}
          </div>

          <div>
            <label>Tags:
            </label>
            <div>
              {tagList}

            </div>
          </div>
          <div>
            <Row>
              <label htmlFor="primary_photo">Photo URL</label>
            </Row>
            <Row>
              <Field name="primary_photo" component="input" type="text"/>
            </Row>
          </div>
          <Button type="submit">Submit</Button>
          <Button>
            <Link className='return-button' to={'/manageitems/forsale'}>Return Home</Link>
          </Button>
        </Form>
      </Container>
    </div>);
  }
}

ManagerEdit = reduxForm({form: 'item_edit'})(ManagerEdit)

function mapStateToProps(store, props) {
  return {
    initialValues: store.items.filter(item => item.id == props.match.params.id)[0]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editItem: bindActionCreators(editItem, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerEdit);
