import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  selectIsLoading,
  selectIsError,
  selectDisplayedContacts,
} from 'redux/selectors';
import { MdOutlineDeleteForever } from 'react-icons/md';


export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const displayedContacts = useSelector(selectDisplayedContacts);

  return (
    <div>
      {isLoading && !error && <b>Loading...</b>}
      {error && <p>There was an error fetching contacts: {error}</p>}
      {!isLoading && !error && (
        <ul>
          {displayedContacts.length === 0 ? (
            <p>No contacts available.</p>
          ) : (
            displayedContacts.map(({ id, name, phone }) => (
              <li key={id}>
                <div>
                  {name}:<span>{phone}</span>
                </div>
                <button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <MdOutlineDeleteForever size={25} />
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
