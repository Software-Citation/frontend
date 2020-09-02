import { UPDATE_CFF } from './actionTypes';

export const updateCff = (cffObj) => {
  return {
    type: UPDATE_CFF,
    cffObj,
  };
};
