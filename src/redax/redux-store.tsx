import {CombinedState, combineReducers, createStore, Reducer} from "redux";
import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./dialogs-reduser";
import {ActionsType, dialogsPagePropsType, profilePagePropsType} from "./store";

export type redusersType = Reducer<CombinedState<{profilepage: profilePagePropsType, dialogspage: dialogsPagePropsType}>, ActionsType>

const redusers:redusersType = combineReducers({
    profilepage: profileReduser,
    dialogspage: dialogsReduser,
})
export const store = createStore(redusers)