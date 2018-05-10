import React from 'react';
import { Col, Panel } from 'react-bootstrap';

function BooksGalleryBook({book}) {
  return (
    <Col xs={12} md={3}>
      <Panel bsStyle="success" className="books-gallery-panel">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{book.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>{book.subtitle}</p>
          <p>{book.authors.join(', ')}</p>
          <img src={book.thumbnail_url} alt={book.title}/>
        </Panel.Body>
      </Panel>

    </Col>
  );
}

export default BooksGalleryBook;
