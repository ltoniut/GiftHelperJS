const jwt = require('jsonwebtoken'),
  config = require('../config').config(),
  Category = require('../handlers/models/category'),
  Subcategory = require('../handlers/models/subcategory'),
  React = require('react'),
  SelectBox = require('react-select-box');

class SubcategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nameValue: '', categories: []};

    this.handleNameChange = this.handleNameChange.bind(this);
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

  const createCategorySelector = new function() {
    const categories = await Category.find();
    var returnValue = new SelectBox(
    {
      label: "Categories",
      onChange: this.handleChange,
      value: this.state.categories,
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
    );
  }
}

<div class="react-select-box-container react-select-box-multi react-select-box-empty" data-reactid=".0.3">
<button id="react-select-box-2" class="react-select-box" tabindex="0" aria-hidden="true" data-reactid=".0.3.0"><div class="react-select-box-label" data-reactid=".0.3.0.0">Favorite Colors</div></button><div class="react-select-box-options react-select-box-hidden" aria-hidden="true" tabindex="0" data-reactid=".0.3.1"><div class="react-select-box-off-screen" data-reactid=".0.3.1.0"><a id="react-select-box-2-0" href="#" class="react-select-box-option" tabindex="-1" data-reactid=".0.3.1.0.$red">Red</a><a id="react-select-box-2-1" href="#" class="react-select-box-option" tabindex="-1" data-reactid=".0.3.1.0.$green">Green</a><a id="react-select-box-2-2" href="#" class="react-select-box-option" tabindex="-1" data-reactid=".0.3.1.0.$blue">Blue</a><a id="react-select-box-2-3" href="#" class="react-select-box-option" tabindex="-1" data-reactid=".0.3.1.0.$black">Black</a><a id="react-select-box-2-4" href="#" class="react-select-box-option" tabindex="-1" data-reactid=".0.3.1.0.$orange">Orange</a><a id="react-select-box-2-5" href="#" class="react-select-box-option" tabindex="-1" data-reactid=".0.3.1.0.$greenish">Light greenish with a little bit of yellow</a></div><button class="react-select-box-close" data-reactid=".0.3.1.1">Close</button></div><div class="react-select-box-native" data-reactid=".0.3.3"><label for="react-select-box-2-native-select" data-reactid=".0.3.3.0">Favorite Colors</label><select id="react-select-box-2-native-select" multiple="" data-reactid=".0.3.3.1"><option value="red" data-reactid=".0.3.3.1.1">Red</option><option value="green" data-reactid=".0.3.3.1.2">Green</option><option value="blue" data-reactid=".0.3.3.1.3">Blue</option><option value="black" data-reactid=".0.3.3.1.4">Black</option><option value="orange" data-reactid=".0.3.3.1.5">Orange</option><option value="greenish" data-reactid=".0.3.3.1.6">Light greenish with a little bit of yellow</option></select></div></div>
