import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import s from './SearchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useSearchParams();
  console.log(search.get('query'));

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
        placeholder="Search images and photos"
        onChange={e => setInput(e.target.value)}
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
