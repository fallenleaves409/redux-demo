export default function createStore(
  reducer,
  initState,
  rewriteCreateStoreFunc
) {
  if (typeof initState === 'function'){
    rewriteCreateStoreFunc = initState;
    initState = {};
  }
  if (rewriteCreateStoreFunc) {
    let newCreateStore = rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer, initState);
  }
  let state = initState;
  let listeners = [];
  //如果某个订阅者在运行时会解绑事件，那么会导致订阅出错，建议将listeners拷贝一份来执行，保证dispatch时队列的不变。
  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index,1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    let copy = listeners.slice();
    for (let i = 0; i < copy.length; i++) {
      copy[i]();
    }
  }
  //触发dispatch来执行所有reducer的default进行初始化
  dispatch({ type: Symbol() });

  function getState() {
    return state;
  }
  return {
    subscribe,
    dispatch,
    getState
  };
}
