import React, { createContext, useReducer, useContext } from "react";

const RentalAgreementContext = createContext();

const initialState = {
  agreements: [
    {
      id: 1,
      propertyId: 1,
      tenantName: "Alice Johnson",
      agreementStatus: "Drafted", // Status can be Drafted, Signed, Completed
      rentalPeriod: "12 months",
    },
  ],
};

const rentalAgreementReducer = (state, action) => {
  switch (action.type) {
    case "ADD_AGREEMENT":
      return {
        ...state,
        agreements: [...state.agreements, action.payload],
      };
    case "UPDATE_STATUS":
      return {
        ...state,
        agreements: state.agreements.map((agreement) =>
          agreement.id === action.payload.id
            ? { ...agreement, agreementStatus: action.payload.status }
            : agreement
        ),
      };
    default:
      return state;
  }
};

export const RentalAgreementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rentalAgreementReducer, initialState);

  return (
    <RentalAgreementContext.Provider value={{ state, dispatch }}>
      {children}
    </RentalAgreementContext.Provider>
  );
};

export const useRentalAgreement = () => useContext(RentalAgreementContext);
