import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix, PageHeader, Panel, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import axios from 'utilities/axios';
import 'stylesheets/books.css';
import AddBookForm from 'books/add_book_form';
import BooksGallery from 'books/books_gallery';

export default class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios({ method:'get', url:'/api/v1/books' })
      .then( (res) => {
        const books = res.data.books;
        this.setState({ books });
      })
  }

  render() {
    return (
      <div className='container'>
        <Row>
          <PageHeader>
            Books. <small>The Mission: 1000 books in our lifetime.</small>
          </PageHeader>
        </Row>
        <AddBookForm />
        <BooksGallery books={ this.state.books }/>
      </div>
    );
  }
}
