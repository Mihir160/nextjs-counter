import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CounterReducer from "../Services/Reducers/counterReducer";
import TodosReducer from "../Services/Reducers/TodosReducer";

const store = createStore( TodosReducer, applyMiddleware(thunk))
export default store