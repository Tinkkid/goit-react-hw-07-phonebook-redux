import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { filterContacts } from 'redux/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import {
  FilterInput,
  FilterLabel,
  InputContainer,
  IconUser,
  TitleLable,
} from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const getFilteredContacts = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    contacts.length > 0 && (
      <FilterLabel>
        <TitleLable>Find contacts by name</TitleLable>
        <InputContainer>
          <IconUser>
            <FiSearch />
          </IconUser>
          <FilterInput
            type="text"
            value={filter}
            onChange={getFilteredContacts}
          />
        </InputContainer>
      </FilterLabel>
    )
  );
};
