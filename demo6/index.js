import {createStore, combineReducers} from './redux';
import counterReducer from './reducer/counterReducer';
import infoReducer from './reducer/infoReducer';
import loggerMiddleware from './middleware/loggerMiddleware';
import exceptMiddleware from './middleware/exceptMiddleware';
import timeMiddleware from './middleware/timeMiddleware';
import applyMiddleware from './applyMiddleware/applyMiddleware';


let reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
})

let rewritefunc = applyMiddleware(exceptMiddleware,timeMiddleware,loggerMiddleware);
let store = createStore(reducer, {} , rewritefunc);


store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count);
})

store.subscribe(() => {
    let state = store.getState();
    console.log(state.info.name + state.info.description);
})

store.dispatch({
    type: 'INCREMENT'
})


