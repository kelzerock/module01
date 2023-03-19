import React, { Component } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Page404 from 'routes/404/404.component';
import About from 'routes/about/about.component';
import Navigation from 'components/navigation/navigation.component';
import Main from 'routes/main/main.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>RSSchool task: Component</h1>
        <Navigation />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}

export default App;
