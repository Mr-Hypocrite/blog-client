import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  theme: false,
  modal: false,
  modalMessage: null,
};

export const UtilContext = createContext(INITIAL_STATE);

const UtilReducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return {
        theme: !state.theme,
        modal: false,
        modalMessage: null,
      };

    case "modal":
      return {
        theme: state.theme,
        modal: true,
        modalMessage: action.payload,
      };

    case "removeModal":
      return {
        theme: state.theme,
        modal: false,
        modalMessage: null,
      };  

    default:
      return state;
  }
};

export const UtilContextProvider = ({ children }) => {
  const [utilState, utilDispatch] = useReducer(UtilReducer, INITIAL_STATE);

  return (
    <UtilContext.Provider
      value={{
        theme: utilState.theme,
        modal: utilState.modal,
        modalMessage: utilState.modalMessage,
        utilDispatch,
      }}
    >
      {children}
    </UtilContext.Provider>
  );
};
