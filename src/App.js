import React from 'react'
import { Route } from 'react-router-dom'
import BooksList from './components/BooksList'
import AddBook from './components/AddBook'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  // Load all the books that are in the bookshelves.
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  onShelfChange = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }))

    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <div>
            <div className="list-books-title">
              <h1>MyReads : React Nanodegree</h1>
            </div>
            <div className="list-books">
              <div className="list-books-content">
                <BooksList listOfBooks={ this.state.books } onShelfChange={ this.onShelfChange } />
              </div>
              <AddBook />
            </div>
          </div>
        )}/>
        <Route path="/search" exact render={({ history }) => (
          <SearchBooks onShelfChange={ this.onShelfChange } history={ history } books={ this.state.books } />
        )}/>
      </div>
    )
  }
}

export default BooksApp
