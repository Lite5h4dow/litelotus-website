import React, { createContext } from "react";

export interface IAppContext {
  state: IAppState;
  dispatcher: React.Dispatch<React.SetStateAction<IAppState>>;
}

export interface IAppState {
  darkMode: boolean;
}

export const AppContext = createContext<IAppContext | null>(null);
