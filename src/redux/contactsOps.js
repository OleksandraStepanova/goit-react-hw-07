import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6666978ca2f8516ff7a3f17f.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contscts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const respons = await axios.get('/contacts');
            return respons.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContacts, thunkAPI) => {
        try {
            const respons = await axios.post('/contacts', newContacts);
            return respons.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);


export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactsId, thunkAPI) => {
        try {
            const respons = await axios.delete(`/contacts/${contactsId}`);
            return respons.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);