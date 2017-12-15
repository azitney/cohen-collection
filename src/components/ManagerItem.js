import React, {Component} from 'react';
import {removeItem} from '../actions/items';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

class ManagerItem extends Component {
  handleDelete = (e) => {
    console.log('id', e.target.id)
    this.props.removeItem(e.target.id)
  }

  render() {

    return (<tr>
      <th scope="row"><img height='100px' width='100px' src={`${this.props.item.primary_photo}`}/></th>
      <td>
        <b>{this.props.item.title}</b>
        <br></br>
        {this.props.item.description}</td>
      <td>
        <ul>{
            this.props.item.tags.map((item) =>< li > {
              item
            }</li>)
          }</ul>
      </td>
      <td>${(this.props.item.price / 100).toFixed(2)}</td>
      <td>
        <Link to={`/manageedititem/${this.props.item.id}`}>
          <i id={this.props.item.id} className="material-icons">mode_edit</i>
        </Link>
      </td>
      <td>
        <i id={this.props.item.id} onClick={this.handleDelete} className="material-icons">delete</i>
      </td>
    </tr>);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: bindActionCreators(removeItem, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ManagerItem);
