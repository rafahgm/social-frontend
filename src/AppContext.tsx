import { createContext, useContext, useReducer } from "react";

type Action = {
    type: "LOG_IN";
    payload: string;
};

interface AppState {
    token: String;
    logged: boolean;
}

const appState: AppState = {
    token: "",
    logged: true,
};

interface AppStateProps {
    state: AppState;
    dispatch: React.Dispatch<Action>;
}

const appContext = createContext<AppStateProps>({} as AppStateProps);

const appReducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case "LOG_IN": {
            return {
                ...state,
                token: action.payload,
                logged: true,
            };
        }
        default: {
            return state;
        }
    }
};

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appReducer, appState);
    return (
        <appContext.Provider value={{ state, dispatch }}>
            {children}
        </appContext.Provider>
    );
};

export const useAppState = () => useContext(appContext);

export default ContextProvider;
