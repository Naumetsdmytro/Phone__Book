import { ContactListItem } from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import style from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <>
      {contacts.length > 0 && (
        <ul className={style.contactList}>
          {contacts.map(contact => {
            return <ContactListItem contact={contact} key={contact.id} />;
          })}
        </ul>
      )}
    </>
  );
};
