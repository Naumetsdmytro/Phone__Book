import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectFilterValue = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.includes(normalizedFilter);
    });
  }
);
