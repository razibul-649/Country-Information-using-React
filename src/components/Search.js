import React, { useState, useEffect} from 'react'

function Search(props) {
    const [searchText,setSearchText]= useState("");
    const handleChange=(e)=>{
         setSearchText(e.target.value);
         
    };

    useEffect(() => {
      props.onSearch(searchText);
    
    }, [searchText])
    
  return (
    <div style={{textAlign:"center"}}>

        <input type="text" style={{color:"black"}} placeholder='Search Here Please' value={searchText} onChange={handleChange}/>
    </div>
  )
}

export default Search