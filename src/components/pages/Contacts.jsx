import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { FilterContactForm } from 'components/FilterContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isNeedToShow = !isLoading && !error;

  return (
    <main>
      <ContactForm />
      <FilterContactForm />

      {isNeedToShow ? <ContactList /> : <Loader />}
    </main>
  );
}
