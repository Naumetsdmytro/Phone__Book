import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { FilterContactForm } from 'components/FilterContactForm';
import { Loader } from 'components/Loader';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import style from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const isNeedToShow = isLoading && !error;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.phoneContainer}>
        <ContactForm />
        <FilterContactForm />
        {isNeedToShow && <Loader />}
        {error && <h2>Sorry, something went wrong ):</h2>}
        {!isNeedToShow && <ContactList />}
      </div>
    </div>
  );
};
