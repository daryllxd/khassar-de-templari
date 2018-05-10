import React, { Component } from 'react';
import axios from 'utilities/axios';
import { Row, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class AddBookForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      isLoading: false,
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClick = (e) => {
    axios({
      method:'get',
      url: `http://localhost:3000/api/v1/books/search?title=${this.state.value}`,
      headers: { 'Accept' :  "application/json, text/plain, version=1 */*" },
    })
      .then( (res) => {
        console.log(res.data);
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <h1>Add Book</h1>
          <p>This is where you add a book.</p>
          <form onSubmit={this.handleSubmit} >
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Search for A Book to Add Here.</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
              <Button
                disabled={ this.state.isLoading }
                onClick={ !this.state.isLoading ? this.handleClick : null}
              >Submit</Button>
            </FormGroup>
          </form>
        </Row>
      </React.Fragment>
    );
  }
}

