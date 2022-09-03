import React, {Children} from 'react';
import {EmptyObject, Store } from 'redux';
import {store} from "./redax/redux-store";
import {ActionsType, dialogsPagePropsType, profilePagePropsType } from './redax/store';

type ProviderType = {
    store: Store<EmptyObject & { profilePage: profilePagePropsType, dialogsPage: dialogsPagePropsType }, ActionsType>
}

export const StoreContext = React.createContext(store);

export const Provider = (props:ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {Children}
            </StoreContext.Provider>
    )
}
