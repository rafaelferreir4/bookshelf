import React from 'react'
import BookShelf from './BookShelf'

function BooksList(props) {

  const { onShelfChange } = props;

  // Categorize the books according to their shelf status.
  const currentlyReading = props.listOfBooks.filter(book => book.shelf === 'currentlyReading')
  const read = props.listOfBooks.filter(book => book.shelf === 'read')
  const wantToRead = props.listOfBooks.filter(book => book.shelf === 'wantToRead')

  return (
    <div>
      <BookShelf shelfTitle="Currently Reading" shelfBooks={ currentlyReading } onShelfChange={ onShelfChange } />
      <BookShelf shelfTitle="Want to Read" shelfBooks={ wantToRead } onShelfChange={ onShelfChange } />
      <BookShelf shelfTitle="Read" shelfBooks={ read } onShelfChange={ onShelfChange } />
    </div>
  )
}

export default BooksList
