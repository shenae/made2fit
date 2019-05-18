import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SpecificPage from './components/SpecificPage/SpecificPage';
import SavedItems from './components/SavedItems/SavedItems';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />


  <main>
        <Route path="/" exact component={Home}/> 
        <Route path="/Saved" exact component={SavedItems}/>   
  </main>
  <Footer />
    </div>
  );
}

export default App;
