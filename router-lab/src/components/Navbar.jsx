// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '24px' }}>Kavlium ❤️</Link>
      <div>
        <Link to="/contacts" style={{ margin: '0 1rem', textDecoration: 'none', color: 'white' }}>Contacts</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
