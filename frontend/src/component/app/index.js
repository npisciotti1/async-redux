import React from 'react';
import Provider from 'react-redux';
import createAppStore from '../../lib/create-app-store';
import {BrowserRouter, Route} from 'react-router-dom';

const store = createAppStore();

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <div className='app'>
          <BrowserRouter>
            <main>
              <h1>cool stuff</h1>
            </main>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
