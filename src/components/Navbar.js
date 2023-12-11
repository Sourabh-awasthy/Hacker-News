import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearchSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSearchSubmit(search); 
  };

  return (
    <nav className="bg-gray-800 p-3 flex justify-between items-center">
      <Link to="/" className="text-white font-bold">
        Hacker NEWS
      </Link>
      <form onSubmit={handleSubmit} className="w-2/3 flex gap-4 pr-4">
        <input
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded w-full text-black font-bold"
          type="text"
          placeholder="Search Hacker news"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          type='submit'
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
