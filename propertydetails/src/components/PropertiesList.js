import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import AddEditPropertyForm from "./AddEditPropertyForm";

const PropertiesList = () => {
  const { state, dispatch } = useAppContext();
  const [editingProperty, setEditingProperty] = useState(null);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_PROPERTY", payload: id });
  };

  return (
    <div className="properties">
      <h1>Properties</h1>
      <button onClick={() => setEditingProperty({})}>Add New Property</button>
      {state.properties.length === 0 ? (
        <p>No properties available.</p>
      ) : (
        <ul>
          {state.properties.map((property) => (
            <li key={property.id}>
              <h2>{property.name}</h2>
              <p>{property.address}</p>
              <p>Rent: {property.rentalPrice}</p>
              <button onClick={() => setEditingProperty(property)}>Edit</button>
              <button onClick={() => handleDelete(property.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {editingProperty && (
        <AddEditPropertyForm
          property={editingProperty}
          onClose={() => setEditingProperty(null)}
        />
      )}
    </div>
  );
};

export default PropertiesList;
