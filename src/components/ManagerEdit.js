import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Container } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { editItem } from '../actions/items';

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
    const { handleSubmit } = this.props
    console.log('this.props in edit', this.props)
    let Alltags = ['sports', 'artists', 'movies', 'autographed', 'sale', 'pittsburgh']
    let tagList = this.props.initialValues? Alltags.map((tag) => this.props.initialValues.tags.includes(tag)? <div><label><Field  checked name={tag} component='input' type="checkbox" value={tag}/> {tag}</label></div> : <div><label><Field name={tag} component='input' type="checkbox" value={tag}/> {tag}</label></div>) : ' ';


    return (
      <div>
        <Container>
          <form onSubmit={ handleSubmit(this.editItem) }>
            <div>
              <label htmlFor="title">Title</label>
              <Field name="title" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field name="description" component="input" type="textarea" />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <Field name="price" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <Field name="status" component="input" type="text" />
            </div>
            <div>
              <label>Tags: </label>
              <div>
                {tagList}

       </div>
     </div>
     <div>
       <label htmlFor="primary_photo">Photo URL</label>
       <Field name="primary_photo" component="input" type="text" />
     </div>
            <button type="submit">Submit</button>
          </form>
        </Container>
      </div>
    );
  }
}

ManagerEdit = reduxForm({
  form: 'item_edit'
})(ManagerEdit)

function mapStateToProps(store, props){
  console.log('AHHH', props)
  console.log(store.items.filter(item => item.id == props.match.params.id)[0])
  return{
    initialValues: store.items.filter(item => item.id == props.match.params.id)[0]
  }
}

function mapDispatchToProps(dispatch){
  return{
    editItem: bindActionCreators(editItem, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerEdit);
