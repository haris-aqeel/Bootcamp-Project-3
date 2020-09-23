import React, {createContext, useContext, useReducer} from 'react'


export const contextCreation = createContext(); 

const GlobalState = ({children, reducer, initialState}) => {
    return (
        <contextCreation.Provider value={ useReducer(reducer, initialState) }>
            {children}
        </contextCreation.Provider>
    )
}

export default GlobalState;


export const useStateValue = () => useContext(contextCreation);
