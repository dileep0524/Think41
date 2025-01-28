import React from "react";
import { useAppContext } from "../context/AppContext";

const RentalAgreements = () => {
  const { state, dispatch } = useAppContext();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_AGREEMENT", payload: id });
  };

  return (
    <div className="agreements">
      <h1>Rental Agreements</h1>
      {state.agreements.length === 0 ? (
        <p>No agreements available.</p>
      ) : (
        <ul>
          {state.agreements.map((agreement) => (
            <li key={agreement.id}>
              <h2>{agreement.propertyName}</h2>
              <p>
                Tenant: {agreement.tenantName} | Status: {agreement.agreementStatus}
              </p>
              <button onClick={() => handleDelete(agreement.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RentalAgreements;
