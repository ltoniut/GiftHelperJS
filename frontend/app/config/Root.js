import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import BrandForm from '../components/BrandForm';

export default class Root extends Component {
  state = {
    subcategories: [],
    brands: []
  };
  
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
      </Router>
    );
  }
}
