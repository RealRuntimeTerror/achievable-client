import { createContext, useContext } from 'react';

export interface IUser{
    name: string,
    googleId: string,
    imageUrl: string
}

export interface IState{
    isSignedIn: boolean,
    user: IUser
}

export type StateContextType = {
    state: IState;
    setState: (state: IState) => void;
}

export const StateContext = createContext<StateContextType>({ state: {} as IState, setState: state => console.warn('no State provider')});
export const useState = () => useContext(StateContext);