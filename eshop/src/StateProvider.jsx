// StateProvider.jsx
import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to use the state value
export const useStateValue = () => useContext(StateContext);
