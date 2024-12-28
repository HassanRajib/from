import React, {useContext, useReducer, createContext} from "react";

export const stateContext = createContext();
export const stateProvider = ({reducer, initialState, Children}) => (
    <stateContext.Provider value={useReducer(reducer,initialState)}>{Children}</stateContext.Provider>
)

export const useStateValue = () => useContext(stateContext) 