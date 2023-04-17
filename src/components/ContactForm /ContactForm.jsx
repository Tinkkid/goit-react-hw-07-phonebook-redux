import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsOperation';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';
import { FiUser, FiPhone } from 'react-icons/fi';
import {
  InputForm,
  InputForContact,
  LabelInputContact,
  BtnSubmit,
  IconUser,
  InputContainer,
  TitleLable,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const dublicateOfName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const dublicateOfNumber = contacts.some(
      contact =>
        contact.number.replace(/-/g, '').replace(/ /g, '') ===
        number.replace(/ /g, '').replace(/-/g, '')
    );

    if (dublicateOfName) {
      Swal.fire(`${name} is alredy in contacts`);
      setName('');
      setNumber('');
      return false;
    }

    if (dublicateOfNumber) {
      Swal.fire(`${number} is alredy in contacts`);
      setName('');
      setNumber('');
      return false;
    }
    dispatch(addContacts(contact));
    setName('');
    setNumber('');
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <LabelInputContact>
        <TitleLable>Name</TitleLable>
        <InputContainer>
          <IconUser>
            <FiUser />
          </IconUser>
          <InputForContact
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            placeholder="Jack Daniels"
          />
        </InputContainer>
      </LabelInputContact>
      <LabelInputContact>
        <TitleLable>Number</TitleLable>
        <InputContainer>
          <IconUser>
            <FiPhone />
          </IconUser>
          <InputForContact
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            placeholder="777 77 77"
          />
        </InputContainer>
      </LabelInputContact>
      <BtnSubmit type="submit">Add contact</BtnSubmit>
    </InputForm>
  );
};
