import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.items.push(...action.payload);
};

const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.items.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.contacts.items.findIndex(
    contact => contact.id === action.payload.id
  );
  if (index !== -1) {
    state.contacts.items.splice(index, 1);
  }
};

const slice = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled);
  },
});

export const { setFilter } = slice.actions;
export const contactReducer = slice.reducer;
