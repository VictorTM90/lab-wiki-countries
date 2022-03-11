import React from 'react'
import {Link} from "react-router-dom"

import axios from 'axios'


import { useState, useEffect } from 'react';


function CountriesList() {
    const [countries, setCountries] = useState([])
  
    const getCountries = async ()=>{
      const response = await axios.get ( "https://ih-countries-api.herokuapp.com/countries")
      
       setCountries(response.data.reverse())
    }
  
  
    useEffect(()=>{
      getCountries()
    },[]);

  
    return (
    <div>
        <h3>List a Country</h3>
        {countries.map((eachCountry)=>{
            return (
                <div key= {eachCountry._id}>

                    <Link to={`/country/${eachCountry.alpha3Code}`} > {eachCountry.name.common}</Link> 
                
                </div>
            )
        })}


        
    </div>
  )
}

export default CountriesList