import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchContact } from "../../features/app/contactSlice";
const SearchContact = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchContact(searchQuery));
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={searchQuery}
        onChange={handleChange}
        className="form-control my-3"
        placeholder="Axtarış..."
      />
    </form>
  );
};

export default SearchContact;
