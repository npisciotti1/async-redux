import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createAppStore from '../../lib/create-app-store.js';

import Dashboard from '../dashboard';

const store = createAppStore();

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <main>
              <h1> cool beans </h1>
              <Route exact path="/" component={Dashboard} />
            </main>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
