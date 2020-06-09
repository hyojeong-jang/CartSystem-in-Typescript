import React from 'react';

import Header from './components/Header'
import Cart from './components/Cart';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header name='장효정' />
      <Cart />
    </div>
  );
}

export default App;
