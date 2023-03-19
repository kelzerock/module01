import SearchBox from 'components/search-bar/search-bar.component';
import React from 'react';
import { Component, ReactNode } from 'react';

class Main extends Component {
  render(): ReactNode {
    return (
      <>
        <p>Main page</p>
        <SearchBox />
      </>
    );
  }
}

export default Main;
