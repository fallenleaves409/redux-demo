import {createStore, combineReducers} from './redux';
import counterReducer from './reducer/counterReducer';
import infoReducer from './reducer/infoReducer';


let reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
})

let store = createStore(reducer);

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

store.dispatch({
    type: 'setName',
    name: '阿芬'
})

store.dispatch({
    type: 'setDescription',
    description: '不爱小明'
})
