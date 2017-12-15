import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import ItemList from './components/ItemList';
import ShoppingCart from './components/ShoppingCart';
import ItemPage from './components/ItemPage';
import ManagerFullList from './components/ManagerFullList';
import ManagerEdit from './components/ManagerEdit';
import Location from './components/Location';
import SocialMedia from './components/SocialMedia';
import SideNav from './components/SideNav';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import ManagerAdd from './components/ManagerAdd';
import { bindActionCreators } from 'redux';
import { getItems } from './actions/items';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  componentDidMount(){
    this.props.getItems();
  }


  render() {
    return (
      <Router>
      <div>

        <MainNav />




          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/items' component={ItemList}/>
            <Route exact path='/cart' component={ShoppingCart}/>
            <Route exact path='/item/:id' component={ItemPage}/>
            <Route exact path='/manageitems/:filter' component={ManagerFullList}/>
            <Route exact path='/manageedititem/:id' component={ManagerEdit}/>
            <Route exact path='/manageradditem' component={ManagerAdd}/>
            <Route exact path='/items/:filter' component={ItemList}/>
          </Switch>

      <Row>
        <Footer />
      </Row>


</div>
</Router>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    getItems: bindActionCreators(getItems, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
