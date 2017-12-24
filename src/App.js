import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
  } from 'react-router-dom'

import './App.css';
import { Home } from './components/Home';
import { Album } from './components/Album';

class App extends Component {

  handleSearchClick = (evt) => {
    evt.preventDefault();
  }
  handleSearchTermChange = (evt) => {
    this.setState({ searchTerm: evt.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-wrapper">
            <div className="App-intro">
              <h1 className="App-title"><Link to="/">iTunes lite</Link></h1>
              <h2 className="App-subtitle">An non official iTunes client</h2>
              <h2 className="App-subtitle">Powered by React</h2>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=cironunes&repo=itunes-lite&type=star&count=true&size=large"
                title="start-button"
                frameBorder="0" scrolling="0" width="111px" height="30px"></iframe>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=cironunes&repo=itunes-lite&type=fork&count=true&size=large"
                title="fork-button"
                frameBorder="0" scrolling="0" width="114px" height="30px"></iframe>
            </div>
          </div>
        </header>

        <main>
          <div className="App-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/album/:id" component={Album} />
            </Switch>
          </div>
        </main>

        <footer>
          <span>Created with <span role="img" aria-label="Heart">💚</span> by <a href="https://cironunes.com">Ciro Nunes</a></span>
        </footer>
      </div>
    );
  }

}

export default App;
