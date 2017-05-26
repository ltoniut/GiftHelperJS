const jwt = require('jsonwebtoken'),
  config = require('../config').config(),
  Brand = require('../handlers/models/brand'),
  Subcategory = require('../handlers/models/subcategory'),
  React = require('react');

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nameValue: '', descriptionValue: '', brandValue: '', subcategoryValue: ''};

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanges(event) {
   this.setState({nameValue: event.target.nameValue});
   this.setState({descriptionValue: event.target.descriptionValue});
   this.setState({brandValue: event.target.brandValue});
   this.setState({subcategoryValue: event.target.subcategoryValue});
  }

  handleSubmit(event) {
    alert('A subcategory was submitted: ' + this.state.nameValue);
    event.preventDefault();
  }

  const createBrandSelector = new function() {
    var options = '<select value={this.state.brandValue} onChange={this.handleBrandChange}>';
    const brands = await Brand.find();
    brands.forEach(function (brand) {
      options += "<option value='" + brand._id + "'>'" + brand.name + "'</option>";
    });
    options += '</select>';

    return options;
  }

  const createSubcategorySelector = new function() {
    var options = '<select value={this.state.subcategoryValue} onChange={this.handleSubcategoryChange}>';
    const subcategories = await Subcategory.find();
    subcategories.forEach(function (subcategory) {
      options += "<option value='" + subcategory._id + "'>'" + subcategory.name + "'</option>";
    });
    options += '</select>';

    return options;
  }

  handleSubmit(event) {
    alert('A subcategory was submitted: ' + this.state.nameValue);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" value={this.state.nameValue} onChange={this.handleNameChange} />
        </label><br />
        <label>
          Description:
          <input type="text" value={this.state.descriptionValue} onChange={this.handleDescriptionChange} />
        </label><br />
        <label>
          Subcategory:
          {createSubcategorySelector()}
        </label><br />
        <label>
          Brand:
          {createSubcategorySelector()}
        </label>
      </form>
    );
  }
}
