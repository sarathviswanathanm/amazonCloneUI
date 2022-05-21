import React, { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext();

// wrap app and provider that has data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// pull information data layer
export const useStateValue = () => useContext(StateContext);
