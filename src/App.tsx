import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainNavbar from './components/MainNavbar'
import BooksDetails from './components/BooksDetails';
import HomePage from './components/HomePage'
import MainFooter from './components/MainFooter';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar></MainNavbar>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/details" element={<BooksDetails/>}></Route>
        </Routes>
        <MainFooter></MainFooter>
      </Router>
    </div>
  );
}

export default App;
