import React from 'react';
import Banner from './Banner';
import Article from './Article';
import Subscribe from './Subscribe';

class Main extends React.Component {
  render () {
    return (
      <main>
        <Banner />
        <Article />
        <Article />
        <Article />
        <Subscribe />
      </main>
    )
  }
}

export default Main;