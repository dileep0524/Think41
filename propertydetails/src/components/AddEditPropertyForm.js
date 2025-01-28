import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const AddEditPropertyForm = ({ property, onClose }) => {
  const { dispatch } = useAppContext();
  const [formState, setFormState] = useState(
    property || { name: "", address: "", rentalPrice: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (property) {
      dispatch({ type: "UPDATE_PROPERTY", payload: formState });
    } else {
      dispatch({
        type: "ADD_PROPERTY",
        payload: { ...formState, id: Date.now() },
      });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="property-form">
      <h2>{property ? "Edit Property" : "Add New Property"}</h2>
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
        Address:
        <input
          type="text"
          value={formState.address}
          onChange={(e) => setFormState({ ...formState, address: e.target.value })}
          required
        />
      </label>
      <label>
        Rental Price:
        <input
          type="text"
          value={formState.rentalPrice}
          onChange={(e) =>
            setFormState({ ...formState, rentalPrice: e.target.value })
          }
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

export default AddEditPropertyForm;
