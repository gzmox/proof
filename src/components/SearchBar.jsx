import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Lógica para realizar la búsqueda, puedes pasar el término de búsqueda al componente principal
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <button >
        <AiOutlineSearch />
      </button>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
      />
      
    </div>
  );
};

export default SearchBar;
