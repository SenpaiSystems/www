import { ReactNode, createContext } from "react";

const initialState = {
    lang: "en",
};

export const AppContext = createContext(initialState);

interface AppProviderProps {
    children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
    return <AppContext.Provider value={initialState}>{children}</AppContext.Provider>;
}
