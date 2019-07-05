import createStore from './redux/index';

let initState = {
    counter: {
        count: 1
    },
    info: {
        name: 'first',
        description: 'hhh'
    }
}

let store = createStore(initState);

store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count);
});

store.subscribe(() => {
    let state = store.getState();
    console.log(`${state.info.name}:${state.info.description}`);
});

store.changeState({
    ...store.getState(),
    counter: {
        count: 2
    }
})

store.changeState({
    ...store.getState(),
    info: {
        name: '222',
        description: 'lalala'
    }
})


