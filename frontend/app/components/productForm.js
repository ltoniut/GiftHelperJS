const jwt = require('jsonwebtoken'),
  React = require('react');

export default class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '', descriptionValue: '', brandValue: '', subcategoryValue: ''
    };
  }

  handleNameChange = (event) => {
   this.setState({nameValue: event.target.value});
  }

  handleDescriptionChange = (event) => {
   this.setState({descriptionValue: event.target.value});
  }

  handleBrandChange = (event) => {
   this.setState({brandValue: event.target.value});
  }

  handleSubcategoryChange = (event) => {
   this.setState({subcategoryValue: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A subcategory was submitted: ' + this.state.nameValue);
    event.preventDefault();
  }

  renderBrand() {
    return (
      <select value={this.state.brandValue} onChange={this.handleBrandChange}>
        {this.props.brands.map((brand) => (
          <option value={brand._id}>{brand.name}</option>
        ))}
      </select>
    )
  }

  renderSubcategory() {
    return (
      <select value={this.state.subcategoryValue} onChange={this.handleSubcategoryChange}>
        {this.props.subcategories.map((subcategory) => (
          <option value={subcategory._id}>{subcategory.name}</option>
        ))}
      </select>
    )
  }

  render() {
    return (
      <div>
        <h2>Product Form</h2>
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
            {this.renderSubcategory()}
          </label><br />
          <label>
            Brand:
            {this.renderBrand()}
          </label>
        </form>
      </div>
    );
  }
}
