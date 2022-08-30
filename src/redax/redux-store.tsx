import {CombinedState, combineReducers, createStore, Reducer} from "redux";
import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./dialogs-reduser";
import {ActionsType, dialogsPagePropsType, profilePagePropsType} from "./store";

export type redusersType = Reducer<CombinedState<{profilePage: profilePagePropsType, dialogsPage: dialogsPagePropsType}>, ActionsType>

const redusers:redusersType = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
})
export const store = createStore(redusers)