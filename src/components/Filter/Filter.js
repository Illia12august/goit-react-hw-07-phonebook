import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleInputChange = e => {
    const contactToFind = e.target.value;
    dispatch(setFilter(contactToFind));
  };

  return (
    <div>
      <label htmlFor="filterInput">
        Find contacts by name
      </label>
      <input
        id="filterInput"
        placeholder="Search..."
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
};
