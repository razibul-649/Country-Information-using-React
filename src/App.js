import React,{useState,useEffect} from 'react';
import Countries from './components/Countries';
import './App.css';
import Search from './components/Search';

const url ='https://restcountries.com/v3.1/all';
function App() {
  const[isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(null);
  const [countries,setCountries]=useState([]);
  const [filterCountries,setFilterCountries]=useState(countries);

  const fetchData=async (url)=>{
    setIsLoading(true);
    try{
       const response =await fetch(url);
       const data= await response.json();
       setCountries(data);
       setFilterCountries(data);
       console.log(data);
       setIsLoading(false);
        setError(null);
    }catch(error){
      setIsLoading(false);
      setError(error);
       
    }
  }
  useEffect(()=>{
    fetchData(url)
 },[])


 const handleRemoveCountry = (name)=>{
  const filter= filterCountries.filter((country)=>country.name.common !==name)
  setFilterCountries(filter);
  
 };
 const handleSearch=(searchValue)=>{
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const countryName= country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });

    setFilterCountries(newCountries);
 };

  return <>
     <h1> World Country Information</h1>
     <Search onSearch={handleSearch}/>
     {isLoading && <h2 style={{textAlign:"center"}}>data is loading please wait </h2>}
     {error && <h>{error.message}</h>}
     {countries && <Countries countries={filterCountries} onRemoveCountry={handleRemoveCountry}/>}
     
  </>
   
    

}

export default App;
