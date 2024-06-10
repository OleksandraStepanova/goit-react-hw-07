import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const handlePending = state => {
    state.error = false;
    state.loading = true;
}
        
const handleRejected = state => {
    state.loading = false;
    state.error = true;
}
        
const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, ation) => {
                state.items = state.items.filter(item => item.id !== ation.payload.id);
                state.loading = false;
            })
            .addCase(deleteContact.rejected, handleRejected)        
    }    
})

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(nameFilter.toLowerCase())
        )
    }
)

export default slice.reducer;