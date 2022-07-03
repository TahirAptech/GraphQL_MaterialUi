import { createContext, useReducer, useState } from "react";

const AppReducer = (products, { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCTS':
            return products = payload;
        default:
            return products;
    }
}

// Create Context
export const PersonContext = createContext();

// Provider Component
export const GlobalProvider = (prop) => {
    const [products, dispatch] = useReducer(AppReducer, []);

    // Actions
    const setProducts = (text) => {
        dispatch({ type: 'SET_PRODUCTS', payload: text })
    }
   
   // const [products, setProducts] = useState([]);
    return (
        <PersonContext.Provider value={{ products, setProducts }}>
            {prop.children}
        </PersonContext.Provider>
    )
}
