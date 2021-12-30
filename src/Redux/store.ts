import { combineReducers, createStore } from "redux";
import {counterReducer} from "./counterReducer";


const reducers = combineReducers({
    count: counterReducer
})

const store = createStore(reducers)

export default store

export type StoreType = ReturnType<typeof reducers>