import * as actions from "../constants/ActionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case actions.FETCH_WEATHER:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}