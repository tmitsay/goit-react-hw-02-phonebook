import css from './contactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  <ul className={css.list}>
    {contacts.map(contact => {
      return (
        <li key={contact.id} className={css.items}>
          <p className={css.name}>
            {contact.name}: <span className={css.number}>{contact.number}</span>
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>;
};
