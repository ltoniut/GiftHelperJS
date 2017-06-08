const jwt = require('jsonwebtoken'),
  React = require('react'),
  SelectBox = require('react-select-box');

export default class SubcategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nameValue: '', categories: []};

    this.handleNameChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({nameValue: event.target.nameValue});
    this.setState({categories: event.target.categories});
  }

  handleSubmit(event) {
    alert('A subcategory was submitted: ' + this.state.nameValue);
    event.preventDefault();
  }

  createCategorySelector() {
    const categories = this.props.categories;
    var returnValue = new SelectBox(
    {
      label: "Categories",
      onChange: this.handleChange,
      value: this.props.categories,
      multiple: true
    });

    returnValue.options = [];

    categories.forEach(function (option) {
      returnValue.options.push({value: option._id,
        label: option.name
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Subcategory Form</h2>
        <form>
          <label>
            Name:
            <input type="text" value={this.state.nameValue} onChange={this.handleNameChange} />
          </label><br />
          <label>
            Categories:
            { this.createCategorySelector }
          </label>
        </form>
      </div>
    );
  }
}
