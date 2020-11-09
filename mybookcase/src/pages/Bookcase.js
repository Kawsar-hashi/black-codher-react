import React from 'react';
import Book from '../components/Book';
import './Bookcase.css';




const BookCase = (props) => {
    return (
        <div className="container"> 
            <div className="line">
                <h3 className="title" >Kawsar's Bookcase App</h3>
                <h4 className= "bookcase"> Welcome to your bookcase. You can save as many books as you like on this app starting from the pre-selected list of books. You can also search for books and add them too. Enjoy :) </h4>
            </div>

            {props.books.map(book => <Book key ={book.id} book= {book} addBook={props.addBook}/>)} 
        </div>
    );
}

export default BookCase;
