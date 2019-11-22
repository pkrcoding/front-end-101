import React from 'react';
import {Router} from '@reach/router';
import 'bulma/css/bulma.min.css';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout path="/" />
    </Router>
  );
}

export default App;
