import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './common/components/Header';
import { Footer } from './common/components/Footer';
import Home from './pages/Home/Home';
import AlbumDetails from './pages/AlbumDetails/AlbumDetailsContainer';

import store from './redux/Store';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <main>
          <div className="App-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/album/:id" component={AlbumDetails} />
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
