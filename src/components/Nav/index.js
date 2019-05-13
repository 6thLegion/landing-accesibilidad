import React from 'react';
import './index.css';

class Nav extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li><a href="google.com">Home</a></li>
          <li><a href="google.com">Artículos</a></li>
          <li><a href="google.com">Fotos</a></li>
          <li><a href="google.com">Contacto</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;