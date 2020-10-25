import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginView from './views/LoginView';
import MainView from './views/MainView';
import Header from './containers/Header';

function App() {
  return (
    <Header>
      <MainView/>
    </Header>
  );
}

export default App;
