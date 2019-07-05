const loggerMiddleware = (store) => (next) => (action) => {
    console.log(`pre state:${store.getState()}`);
    console.log('action');
    next(action);
    console.log(`next state:${store.getState()}`);
}

export default loggerMiddleware;