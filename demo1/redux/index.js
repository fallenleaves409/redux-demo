export default function createStore(initState) {
    let state = initState;

    let listeners = [];
    
    //订阅
    function subscribe (listener) {
        listeners.push(listener);
    } 

    //修改
    function changeState (newState) {
        state = newState;
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