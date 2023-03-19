import CardList from 'components/card-list/card-list.component';
import SearchBox from 'components/search-bar/search-bar.component';
import React from 'react';
import { Component } from 'react';

interface MyCard {
  id: number;
  name: string;
  email: string;
  likes: number;
}

const myCard: MyCard[] = [
  { id: 1, name: 'Rebeka', email: 'rebeka@gmail.com', likes: 33 },
  { id: 2, name: 'Aleksa', email: 'aleksa@gmail.com', likes: 3 },
  { id: 3, name: 'Bob', email: 'bob@gmail.com', likes: 15 },
  { id: 4, name: 'Jac', email: 'jac@gmail.com', likes: 66 },
  { id: 5, name: 'Stiv', email: 'stiv@gmail.com', likes: 43 },
  { id: 6, name: 'Colly', email: 'colly@gmail.com', likes: 133 },
  { id: 7, name: 'Rath', email: 'rath@gmail.com', likes: 9 },
  { id: 8, name: 'Zet', email: 'zet@gmail.com', likes: 30 },
];

// src={`https://robohash.org/${id}?set=set4`}

class Main extends Component {
  constructor(props: number) {
    super(props);
    this.state = {
      listOfCards: myCard,
      searchInfo: '',
    };
  }

  render() {
    return (
      <>
        <p>Main page</p>
        <SearchBox />
        <CardList />
      </>
    );
  }
}

export default Main;
