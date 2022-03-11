import React from 'react'

import axios from 'axios'

import { useParams} from "react-router-dom"
import {useState, useEffect} from "react"




function CountryDetails(props) {
console.log(props)
const {id} = useParams()

const [detailsCountry, setDetailsCountry] = useState(null)
    
const getCountriesDetails = async ()=>{
    const response = await axios.get ( "https://ih-countries-api.herokuapp.com/countries");

   const countryDetail = response.data.filter((eachCountry) => {
     if(response.data.alpha3Code === id){
       return eachCountry 
     }})

   console.log(countryDetail)
  
    setDetailsCountry(response)

    
  }
  useEffect(()=>{
    getCountriesDetails()
  }, [id])

if(!id){return <div>...loading</div>}

return (
    
    
    <div>


    </div>
  )
}

export default CountryDetails