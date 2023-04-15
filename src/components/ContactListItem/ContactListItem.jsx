import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import style from './ContactListItem.module.css';

export const ContactListItem = ({ contact: { name, number, id } }) => {
  return (
    <li className={style.contactListItem} key={id}>
      <p className={style.contactListText}>
        {name}: {number}
      </p>
      <ButtonDelete id={id} />
    </li>
  );
};

const ButtonDelete = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(deleteContact(id))}
      className={style.buttonDelete}
    >
      Delete
    </button>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
