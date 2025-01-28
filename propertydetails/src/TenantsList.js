import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import AddEditTenantForm from "./components/AddEditTenantForm";

const TenantsList = () => {
  const { state, dispatch } = useAppContext();
  const [editingTenant, setEditingTenant] = useState(null);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TENANT", payload: id });
  };

  return (
    <div className="tenants">
      <h1>Tenants</h1>
      <button onClick={() => setEditingTenant({})}>Add New Tenant</button>
      {state.tenants.length === 0 ? (
        <p>No tenants available.</p>
      ) : (
        <ul>
          {state.tenants.map((tenant) => (
            <li key={tenant.id}>
              <h2>{tenant.name}</h2>
              <p>Email: {tenant.email}</p>
              <p>Phone: {tenant.phone}</p>
              <button onClick={() => setEditingTenant(tenant)}>Edit</button>
              <button onClick={() => handleDelete(tenant.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {editingTenant && (
        <AddEditTenantForm
          tenant={editingTenant}
          onClose={() => setEditingTenant(null)}
        />
      )}
    </div>
  );
};

export default TenantsList;
