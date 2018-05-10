import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';

export default class BooksGalleryBook extends Component {
  render() {
    return (
      <Col xs={12} md={3}>
        <Panel bsStyle="success" className="books-gallery-panel">
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

