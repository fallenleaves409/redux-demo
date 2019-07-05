export default function combineReducers (reducers) {
    let keys = Object.keys(reducers);

    return function combination (state = {},action) {
        let nextState = {};

        for(let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let reducer = reducers[key];
            let preState = state[key];
            //执行相应的reducer获取当前key下个状态的数据
            nextState[key] = reducer(preState, action);
        }
        //最后将所有keys的状态更新
        return nextState;
    }
}