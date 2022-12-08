import PropTypes from 'prop-types';
// import {
//   ContactItem,
//   ContactListStyled,
//   ContactsWrap,
// } from './ContactList.styled';

export const Contacts = ({ contactsFiltred, handleDelete }) => (
  <div>
    <ul>
      {contactsFiltred.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Contacts.propTypes = {
  contactsFiltred: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  handleDelete: PropTypes.func.isRequired,
}