import createStore from "./redux/index";

function plan(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

let initState = {
  count: 0
};

let store = createStore(plan, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});

store.changeState({
  type: "DECREMENT"
});

store.changeState({
  type: "INCREMENT"
});

store.changeState({
  count: "sss"
});
