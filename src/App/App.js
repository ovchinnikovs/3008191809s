import React from 'react';
import './App.css';
import './App-media.css';

import Profile from '../Profile/index';
import Form from '../Form/index';

function App() {
  return (
    <div className="container">
      <main className="card">
        <Profile />
        <Form />
      </main>
    </div>
  );
}

export default App;
