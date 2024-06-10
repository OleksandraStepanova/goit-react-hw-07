import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
    name: 'contacts',
    initialState:{items: []},
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload)
            },
             prepare(value) {
                return {
                    payload: {
                        id: nanoid(),
                        name: value.name,
                        number: value.number,
                    }
                }
            }
        },
        deleteContact(state, action){
                const index = state.items.findIndex(contact => contact.id === action.payload);
                state.items.splice(index, 1);
            }
    }
})

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = state => state.contacts.items;

export default slice.reducer;