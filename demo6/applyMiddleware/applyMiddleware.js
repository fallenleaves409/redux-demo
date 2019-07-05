export default function applyMiddleware (...middlewares) {
    return function rewriteCreateStore(oldCreateStore) {
      return function newCreateStore(reducer,initstate) {
        //先实例旧的store
        let store = oldCreateStore(reducer,initstate);
        //给所有中间件传入store
        let chain = middlewares.map(item => {
          return item(store);
        })
        //组合中间件
        let dispatch = store.dispatch;
        chain.reverse().map(item => {
          dispatch = item(dispatch);
        });
        //重写store.dispatch并返回新的store
        store.dispatch = dispatch;
        return store;
      }
    }
  }