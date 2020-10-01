import React from 'react';
// Components

// Routing
import {HashRouter} from 'react-router-dom'
import router from './router'

function App() {
  return (
    <HashRouter>
      <div className="App">
        {router}
      </div>
    </HashRouter>
  );
}

export default App;
