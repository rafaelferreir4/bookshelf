import React from 'react'
import BookShelf from './BookShelf'

function BooksList(props) {

  const { onShelfChange, listOfBooks } = props;

  // Categorize the books according to their shelf status.
  const currentlyReading = listOfBooks.filter(book => book.shelf === 'currentlyReading')
  const read = listOfBooks.filter(book => book.shelf === 'read')
  const wantToRead = listOfBooks.filter(book => book.shelf === 'wantToRead')

  return (
    <div>
      <BookShelf shelfTitle="Currently Reading" shelfBooks={ currentlyReading } onShelfChange={ onShelfChange } />
      <BookShelf shelfTitle="Want to Read" shelfBooks={ wantToRead } onShelfChange={ onShelfChange } />
      <BookShelf shelfTitle="Read" shelfBooks={ read } onShelfChange={ onShelfChange } />
    </div>
  )
}

export default BooksList
