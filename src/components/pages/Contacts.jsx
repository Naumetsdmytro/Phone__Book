import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { FilterContactForm } from 'components/FilterContactForm';

export default function Contacts() {
  return (
    <main>
      <ContactForm />
      <FilterContactForm />
      <ContactList />
    </main>
  );
}
