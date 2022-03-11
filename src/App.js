import './App.css';

import {Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react';

import CountryDetails from "./components/CountryDetails"
import CountryList from "./components/CountriesList"
import Navbar from "./components/Navbar"

function App() {
  
  


  return (
    <div className="App">
    <CountryList />
    <Navbar />
    <Routes>

      <Route path="/country/:id" element={ <CountryDetails />} />

    </Routes>


    </div>
  );



}


export default App;
