import React from 'react';
import { Row } from 'react-bootstrap';
import BooksGalleryBook from 'books/BooksGalleryBook';

function BooksGallery({books}) {
  return (
    <Row>
      <div className="books-gallery-container">
        {
          books.map((book) =>
              <BooksGalleryBook key={book.id} book={book}></BooksGalleryBook>
          )
        }
      </div>
    </Row>
  );
}

export default BooksGallery;
