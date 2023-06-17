import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');
  const [isInputExpanded, setInputExpanded] = useState(false);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleFocus = () => {
    setInputExpanded(true);
  };

  const handleBlur = () => {
    setInputExpanded(false);
  };

  return (
    <div
      className={`${style.searchBar} ${
        isInputExpanded ? style.inputExpanded : ''
      }`}>
      <input type='search' onChange={handleChange} value={id} />
      <button
        onClick={() => {
          onSearch(id);
          setId('');
        }}>
        Agregar
      </button>
    </div>
  );
}
