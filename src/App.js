import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SpecificPage from './components/SpecificPage/SpecificPage';
import SavedItems from './components/SavedItems/SavedItems';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Measurement from './components/Measurement/Measurement';
import AccountConfirmation from './components/AccountConfirmation/AccountConfirmation';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />      
      <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Saved" component={SavedItems}/>
            <Route exact path="/Specific" component={SpecificPage}/>   
            <Route exact path="/CreateAccount" component={CreateAccount}/>   
            <Route exact path="/Measurement" component={Measurement}/>   
            <Route exact path="/AccountConfirmation" component={AccountConfirmation}/>   
      </main>
      <Footer />
    </div>
  );
}

export default App;
