import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../features/app/contactSlice";
const initialState={ name: "", surName: "", phone: "" }
const AddContact = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if(form.name==="" || form.surName==="" ||form.phone===""){
      return false
    }
   e.preventDefault();
    dispatch(
      addContact({
        id:nanoid(),
        name: form.name,
        surName: form.surName,
        phone: form.phone,
      })
    );
  
 
    setForm(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-success mb-4">Add contact</h3>
      <div className="input-group mb-3">
        <input
          onChange={handleChange}
          value={form.name}
          name="name"
          className="form-control"
          placeholder="Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append"></div>
      </div>
      <div className="input-group mb-3">
        <input
          onChange={handleChange}
          value={form.surName}
          name="surName"
          className="form-control"
          placeholder="Surname"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append"></div>
      </div>
      <div className="input-group mb-3">
        <input
          onChange={handleChange}
          value={form.phone}
          name="phone"
          className="form-control"
          placeholder="Phone number"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append"></div>
      </div>
      <button
        className="input-group-text btn btn-success mb-5"
        style={{ float: "right" }}
        id="basic-addon2"
      >
        Add
      </button>
    </form>
  );
};

export default AddContact;
