const exceptMiddleware = (store) => (next) => (action) => {
    try{
        next(action);
    } catch (err) {
        console.error(err);
    }
}

export default exceptMiddleware;