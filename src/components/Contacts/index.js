import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../features/app/contactSlice";
const Contacts = () => {
  const items = useSelector((state) => state.contacts.filteredContact);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <h4 className="text-primary mt-5">Contact list ({items.length})</h4>
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center bg-light"
            key={i}
          >
            <div className="name">{item.name}</div>
            <div className="surname">{item.surName}</div>
            <div className="phone text-primary">{item.phone}</div>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-danger"
                onClick={()=>handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
