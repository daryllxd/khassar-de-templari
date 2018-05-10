import React, { Component } from 'react';
import { Row, PageHeader } from 'react-bootstrap';
import axios from 'utilities/axios';

export default class PomodorosApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios({ method:'get', url:'/api/v1/pomodoros' })
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
            Pomodoros. <small>Trust the process.</small>
          </PageHeader>
        </Row>
      </div>
    );
  }
}
