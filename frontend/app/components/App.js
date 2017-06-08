import React, { Component } from 'react';
import BrandForm from './brandForm';
import ProductForm from './productForm';
import SubcategoryForm from './subcategoryForm';

export default class App extends Component {
  state = {
    subcategories: [],
    brands: [],
    categories: []
  };

  render() {
    return (
      <div>
        <BrandForm />
        <ProductForm
          brands={this.state.brands}
          subcategories={this.state.subcategories}
        />
        <SubcategoryForm
        categories={this.state.categories}
        />
      </div>
    );
  }
}
