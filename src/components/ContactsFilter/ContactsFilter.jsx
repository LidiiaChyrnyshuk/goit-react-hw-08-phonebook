import React from 'react';

import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const ContactsFilter = () => {
  const filter = useSelector(selectFilter);
  const distpach = useDispatch();

  return (
    <label htmlFor="filter" className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        title="Please enter a name to find your contacts"
        value={filter}
        onChange={event => distpach(filterContacts(event.target.value))}
      />
    </label>
  );
};
