import {CombinedState, combineReducers, createStore, Reducer} from "redux";
import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./dialogs-reduser";
import {ActionsType, dialogsPagePropsType, profilePagePropsType} from "./store";



const rootReducer = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
})


export  type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)