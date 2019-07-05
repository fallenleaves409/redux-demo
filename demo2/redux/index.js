export default function  createStore(plan, initState) {
    let state = initState;
    let listeners = [];
    function subscribe (listener) {
        listeners.push(listener);
    }

    function changeState (action) {
        state = plan(state,action);
        for(let i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }

    function getState () {
        return state;
    }
    return {
        subscribe,
        changeState,
        getState
    }

}