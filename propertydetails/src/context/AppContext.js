import React, { createContext, useReducer, useContext } from "react";

const AppContext = createContext();

const initialState = {
  properties: [],
  tenants: [],
  agreements: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    // Property Actions
    case "ADD_PROPERTY":
      return { ...state, properties: [...state.properties, action.payload] };
    case "UPDATE_PROPERTY":
      return {
        ...state,
        properties: state.properties.map((property) =>
          property.id === action.payload.id ? action.payload : property
        ),
      };
    case "DELETE_PROPERTY":
      return {
        ...state,
        properties: state.properties.filter((property) => property.id !== action.payload),
      };

    // Tenant Actions
    case "ADD_TENANT":
      return { ...state, tenants: [...state.tenants, action.payload] };
    case "UPDATE_TENANT":
      return {
        ...state,
        tenants: state.tenants.map((tenant) =>
          tenant.id === action.payload.id ? action.payload : tenant
        ),
      };
    case "DELETE_TENANT":
      return {
        ...state,
        tenants: state.tenants.filter((tenant) => tenant.id !== action.payload),
      };

    // Agreement Actions
    case "ADD_AGREEMENT":
      return { ...state, agreements: [...state.agreements, action.payload] };
    case "UPDATE_AGREEMENT":
      return {
        ...state,
        agreements: state.agreements.map((agreement) =>
          agreement.id === action.payload.id ? action.payload : agreement
        ),
      };
    case "DELETE_AGREEMENT":
      return {
        ...state,
        agreements: state.agreements.filter((agreement) => agreement.id !== action.payload),
      };

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
