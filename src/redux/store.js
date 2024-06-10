import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from './contactsSlice';
import filtersReduser from './filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistedContactsReduser = persistReducer(
  {
    key: 'contactsValue',
    storage,
    whitelist: ['items'],
  },
  contactsReduser
);



export const store = configureStore({
    reducer: {
        contacts: persistedContactsReduser,
        filters: filtersReduser,
    },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);