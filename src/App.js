import React from 'react';
import './App.css';
import './media.css';

import Profile from '../src/Profile/index';
import Form from '../src/Form/index';

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
