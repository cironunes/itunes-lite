import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="App-header">
    <div className="App-wrapper">
      <div className="App-intro">
        <h1 className="App-title">
          <Link to="/">iTunes lite</Link>
        </h1>
        <h2 className="App-subtitle">A non official iTunes client</h2>
        <h2 className="App-subtitle">Powered by React</h2>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=cironunes&repo=itunes-lite&type=star&count=true&size=large"
          title="start-button"
          frameBorder="0"
          scrolling="0"
          width="111px"
          height="30px"
        />
        <iframe
          src="https://ghbtns.com/github-btn.html?user=cironunes&repo=itunes-lite&type=fork&count=true&size=large"
          title="fork-button"
          frameBorder="0"
          scrolling="0"
          width="114px"
          height="30px"
        />
      </div>
    </div>
  </header>
);
