import PropTypes from 'prop-types';

import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className={s.item}>
    <span className={s.info}>
      {name}: {number}
    </span>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
