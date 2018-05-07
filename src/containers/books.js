import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix, Panel } from 'react-bootstrap';
import '.././stylesheets/books.css';
import axios from 'axios';

class Book extends Component {
  render() {
    return (
      <Col xs={12} md={3}>
        <Panel bsStyle="success books-gallery-panel">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{ this.props.book.title }</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>{ this.props.book.subtitle }</p>
            <p>{ this.props.book.authors.join(', ') }</p>
            <img src={ this.props.book.thumbnail_url }/>
          </Panel.Body>
        </Panel>

      </Col>
    );
  }
}

class BooksGallery extends Component {
  render() {
    return (
      <Row>
        <div className="books-gallery-container">
          {
            this.props.books.map( (book) =>
                <Book key={book.id} book={book}></Book>
            )
          }
        </div>
      </Row>
    );
  }
}

export default class Books extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios({
      method:'get',
      url:'http://localhost:3000/api/v1/books',
      headers: { 'Accept' :  "application/json, text/plain, version=1 */*" }
    })
      .then( (res) => {
        const books = res.data.books;
        this.setState({ books });
      })
  }

  render() {
    return (
      <div className='container'>
        <h1>Books I've Read:</h1>
        <BooksGallery books={ this.state.books }/>
      </div>
    );
  }
}
