import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsOperation';
import { Name, Number, BtnDelete } from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <>
      <Name>{name}:</Name> <Number>{number}</Number>
      <BtnDelete id={id} type="button" onClick={handleDelete}>
        Delete
      </BtnDelete>
    </>
  );
};
