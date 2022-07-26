export const COMPLETE = "COMPLETE";
export const DELETE = "DELETE";

const reducer = (state, action) => {
  switch (action.type) {
    case COMPLETE:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
