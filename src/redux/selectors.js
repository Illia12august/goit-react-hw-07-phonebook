import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactData.contacts.items;
export const selectIsLoading = state => state.contactData.contacts.isLoading;
export const selectIsError = state => state.contactData.contacts.error;
export const selectFilter = state => state.contactData.filter;

export const selectDisplayedContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
