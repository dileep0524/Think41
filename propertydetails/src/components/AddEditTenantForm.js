import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const AddEditTenantForm = ({ tenant, onClose }) => {
  const { dispatch } = useAppContext();
  const [formState, setFormState] = useState(
    tenant || { name: "", email: "", phone: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tenant) {
      dispatch({ type: "UPDATE_TENANT", payload: formState });
    } else {
      dispatch({
        type: "ADD_TENANT",
        payload: { ...formState, id: Date.now() },
      });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="tenant-form">
      <h2>{tenant ? "Edit Tenant" : "Add New Tenant"}</h2>
      <label>
        Name:
        <input
          type="text"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={formState.phone}
          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
          required
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default AddEditTenantForm;
