import React from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './services/fetch';

function App() {
    const comics = getData();
    console.log(comics);

    return <div></div>;
}

export default App;
