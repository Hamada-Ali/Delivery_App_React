import React, { createContext, useContext, useReducer} from 'react'

export const Context = createContext();

 const Provider = ({reducer, initialState, children}) => (
        <Context.Provider value={useReducer(reducer, initialState)}>
            {children}
        </Context.Provider>
    )

export const useTheContext = () => useContext(Context);

export default Provider
