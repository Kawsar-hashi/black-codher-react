import React, {Fragment} from 'react'; 
import ReactDOM from 'react-dom'; 
import books from './books.json';

const formatter = new Intl.NumberFormat('en-GB', { style: 'currency',
currency: 'GBP'
})
const book = books[0];



const renderList = () => {
  const list = [];  
  for (let i = 0; i < books.length; i++) {   
    let { id, volumeInfo: { title, authors, description,
     imageLinks } } = books[i];   list.push(<li id={books[i].id}>{title} - {authors.map(author => (author))}     
     {imageLinks && imageLinks.smallThumbnail && <img src= {imageLinks.smallThumbnail} />  
      }</li>);  }
       return list;}


const element = <Fragment>;

{/* <h1 id={id}>{title} = {formatter.format(amount)}</h1>  */}
<div>
 <ul>
  {renderList}
 </ul>
  
</div>
</Fragment>; 

ReactDOM.render(element,document.getElementById('root'));





{books.map(book => {      let { id, volumeInfo: { title, authors, description } } = book;      return <li id={id}>{title}</li>    })}