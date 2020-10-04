import React, { useState } from 'react'; 
import Books from './components/Books.js';
 import data from './models/books.json';

const App = (props) => {

const [books] = useState(data);

   return (
      <div>
     {books.map(books => <Book key={book.id} book={book}/>)} 
 </div>
  ); 


export default App;