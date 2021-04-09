import { combineReducers } from "redux";
import filtersReducer from './filters';
import pizzasReducer from './pizzas';

const rootReduces = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
});

export default rootReduces;