import React, { Component } from 'react';
import axios from 'axios';

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

  render () {
    return (
      <div className="HomeBody">
        <h1>Books</h1>
        <ul>
          { this.state.books.map( (book) => <li>{ book.title }</li>)  }
        </ul>
      </div>
    );
  }
}
