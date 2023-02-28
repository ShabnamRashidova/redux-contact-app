import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  filteredContact:[],
  search: "",
};
export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
      state.filteredContact=[...state.items];
    },
    deleteContact: (state, action) => {
      let id = action.payload;
      let filteredItem = state.filteredContact.filter((item) => item.id !== id);
      state.filteredContact = filteredItem;
      
    },
    searchContact: (state, action) => {
      state.search = action.payload;
       state.filteredContact = state.items.filter((item) =>
        item.name.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
});
export default contactSlice.reducer;
export const { addContact, deleteContact, searchContact } =
  contactSlice.actions;
