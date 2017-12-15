import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import {Link} from 'react-router-dom';

class ManagerLogin extends Component {

  render() {

    return (<div className='login'>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder"/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"/>
        </FormGroup>
      </Form>
      <Link to={'/manageitems/forsale'}>Login</Link>

    </div>);
  }
}

export default ManagerLogin;
