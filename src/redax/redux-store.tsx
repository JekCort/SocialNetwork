import {CombinedState, combineReducers, createStore, Reducer} from "redux";
import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./dialogs-reduser";
import {usersReducer} from "./users-reduser";



const rootReducer = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    users: usersReducer
})


export  type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)