import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Header'
import Cart from './components/Cart';

import api from './api/index';
import { fetchData } from './actions/index';

import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async() => {
      const response = await api();
      dispatch(fetchData(response));
    };

    getData();
  }, [])

  return (
    <div className={styles.App}>
      <Header name='장효정' />
      <Cart />
    </div>
  );
}

export default App;
