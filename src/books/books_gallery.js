import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import BooksGalleryBook from 'books/books_gallery_book';

export default class BooksGallery extends Component {
  render() {
    return (
      <Row>
        <div className="books-gallery-container">
          {
            this.props.books.map( (book) =>
                <BooksGalleryBook key={book.id} book={book}></BooksGalleryBook>
            )
          }
        </div>
      </Row>
    );
  }
}

