import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import s from './SearchForm.module.css';

const SearchForm = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useSearchParams();
  console.log(search);
  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ query: input });
  };
  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.SearchForm_button}>
        <span className={s.SearchForm_button_label}>Search</span>
      </button>

      <input
        className={s.SearchForm_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter the name of the movie"
        onChange={e => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
