import { UPDATE_CFF } from '../actions/actionTypes';

const initialState = {
  cffObj: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CFF:
      return {
        ...state,
        cffObj: action.cffObj,
      };
    default:
      return { ...state };
  }
};

export default reducer;
