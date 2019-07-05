export default function infoReducer(state, action) {
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
