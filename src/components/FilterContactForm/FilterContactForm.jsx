import { filterContacts } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

import style from './FilterContactForm.module.css';

export const FilterContactForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  return (
    <>
      <h2 className={style.title}>Contacts</h2>
      <label className={style.inputTitle}>
        <span className={style.inputText}>Find contacts by name</span>
        <input
          type="text"
          value={filter}
          onChange={evt => dispatch(filterContacts(evt.currentTarget.value))}
          className={style.filterInput}
        />
      </label>
    </>
  );
};
