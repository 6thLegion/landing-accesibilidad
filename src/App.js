import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
        {/* <banner></banner>
        <articulos></articulos>
        <subscribe></subscribe> */}
      <Footer />
    </div>
  );
}

export default App;
