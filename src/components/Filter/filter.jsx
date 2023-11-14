import { render } from '@testing-library/react';
import css from './filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        type="text"
        className={css.input}
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};
