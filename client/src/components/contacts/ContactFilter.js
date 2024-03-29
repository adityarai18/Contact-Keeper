import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const { filterContacts, clearFilter } = contactContext;

  const onChange = (e) => {
    if (e.target.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input type='text' placeholder='Filter Contacts...' onChange={onChange} />
    </form>
  );
};

export default ContactFilter;
