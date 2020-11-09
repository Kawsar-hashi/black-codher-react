import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Header.css'; 

const Header = () => {

  return (
    
    <header className="header">
      <div></div>
      <div className="main">
        <div className="main-body">My Bookcase</div>
      </div>
      <ul className="nav nav-tabs nav justify-content-start navbar navbar-expand-lg navbar-light bg-light">
        <nav className="nav-item">
          <Link className="nav-link Home" to="/">Home</Link>
        </nav>
        <nav className="nav-item">
          <Link className="nav-link Search" to="/search">Search</Link>
        </nav>
        <nav className="nav-item">
          <Link className="nav-link About" to="/About">About</Link>
        </nav>
      </ul>
   </header>   
  ); 
}

export default Header; 