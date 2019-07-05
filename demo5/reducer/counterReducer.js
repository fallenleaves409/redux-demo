let initState = {
  count: 1
}
export default function counterReducer(state, action) {
  //通过闭包管理初始赋值
  if(!state) {
    state = initState;
  }
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
