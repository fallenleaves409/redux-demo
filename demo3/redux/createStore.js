export default function createStore(reducer, initState) {
    let state = initState;
    let listeners = [];
    function subscribe (listener) {
        listeners.push(listener);
    }

    function dispatch (action) {
        state = reducer(state,action);
        for(let i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }

    function getState () {
        return state;
    }
    return {
        subscribe,
        dispatch,
        getState
    }

}