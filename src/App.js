import React, { useState ,useEffect } from 'react';
import Navbar from './components/Navbar'; 
import Item from './components/Item';
import Inside from "./components/Inside"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //using browser roter for navigation

const App = () => {
  const [data, setData] = useState(null);
//fn to fetch data from the given api in doc
  const fetchData = async (searchTerm) => {
    const query = searchTerm.trim() ? `query=${encodeURIComponent(searchTerm)}` : '';
    try {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Could not fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData(''); 
  }, []);

  
  const handleSearchSubmit = (searchTerm) => {
    fetchData(searchTerm);
  };


  return (
    <BrowserRouter>
      <Navbar onSearchSubmit={handleSearchSubmit} />
      <Routes>
        <Route path="/" element={<>
        <h1 className="text-center underline font-bold text-3xl ">Top News</h1>
        <Item data={data} /> 
        </>} 
        />
        <Route path="/inside/:objectID" element={<Inside />} />
      
    
      </Routes>
    </BrowserRouter>
  );
};

export default App;
