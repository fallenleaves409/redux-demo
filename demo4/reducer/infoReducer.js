let initState = {
  name: '小白',
  description: '真黑啊'
}

export default function infoReducer(state, action) {
  //通过闭包管理初始赋值
  if(!state) {
    state = initState;
  }
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.name
      };
    case "setDescription":
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}
