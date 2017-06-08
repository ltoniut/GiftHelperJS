const jwt = require('jsonwebtoken'),
  React = require('react'),
  ReactDOM = require('react-dom');

export default class BrandForm extends React.Component {
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
      <div>
        <h2>Brand Form</h2>
        <form id='form'>
          <label>
            Name:
            <input type="text" value={this.state.nameValue} onChange={this.handleNameChange} />
          </label><br />
          <label>
            Description:
            <input type="text" value={this.state.descriptionValue} onChange={this.handleDescriptionChange} />
          </label>
        </form>
      </div>
    );
  }
}

exports.BrandForm = BrandForm;
