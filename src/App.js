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
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Saved" component={SavedItems}/>
            <Route exact path="/Specific" component={SpecificPage}/>   
      </main>
      <Footer />
    </div>
  );
}

export default App;
