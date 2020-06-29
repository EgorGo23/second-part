import React, { createContext, useReducer } from 'react';

const initialState = {
    radioState: null,
    checkBoxState: {},
    isResult: false,
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
const [globalState, dispatch] = useReducer((state, { type, payload }) => {
        switch (type) {
            case 'CHANGE_CHECKBOX':
                if (!state.checkBoxState[payload]) {
                    return {
                        ...state,
                        checkBoxState: {
                            ...state.checkBoxState,
                            [payload]: true,
                        }
                    }
                } else {
                    return {
                        ...state,
                        checkBoxState: {
                            ...state.checkBoxState,
                            [payload]: !state.checkBoxState[payload],
                        }
                    }
                }
            case 'CHANGE_RADIO': 
                return {
                    ...state,
                    radioState: payload
                }
            case 'SUBMIT':
                return {
                    ...state,
                    isResult: true,
                }
            default:
            throw new Error();
        }
    }, initialState);

  return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
};


export { store, StateProvider };