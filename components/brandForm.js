const jwt = require('jsonwebtoken'),
  config = require('../config').config(),
  Brand = require('../handlers/models/brand'),
  Subcategory = require('../handlers/models/subcategory'),
  React = require('react');

class BrandForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nameValue: '', descriptionValue: ''};

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanges(event) {
   this.setState({nameValue: event.target.nameValue});
   this.setState({descriptionValue: event.target.descriptionValue});
  }

  handleSubmit(event) {
    alert('A subcategory was submitted: ' + this.state.nameValue);
    event.preventDefault();
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
        </label>
      </form>
    );
  }
}
