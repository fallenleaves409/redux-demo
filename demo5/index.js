import {createStore, combineReducers} from './redux';
import counterReducer from './reducer/counterReducer';
import infoReducer from './reducer/infoReducer';
import loggerMiddleware from './middleware/loggerMiddleware';
import exceptMiddleware from './middleware/exceptMiddleware';
import timeMiddleware from './middleware/timeMiddleware';


let reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
})

let store = createStore(reducer);

const next = store.dispatch;

const logger = loggerMiddleware(store);
const except = exceptMiddleware(store);
const time = timeMiddleware(store);

store.dispatch = except(time(logger(next)));

store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count);
})

store.subscribe(() => {
    let state = store.getState();
    console.log(state.info.name + state.info.description);
})

store.dispatch({
    type: 'DECREMENT'
})


