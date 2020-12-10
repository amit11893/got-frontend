import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './actionCreators';
import { getUniqueObjects } from '../utils';

const initialState = {
  pending: false,
  data: [],
  error: null,
  initialRequest: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return { ...state, pending: true };
    case FETCH_DATA_SUCCESS:
      if (!state.initialRequest) {
        return {
          ...state,
          pending: false,
          initialRequest: true,
          data: action.payload,
          kings: getUniqueObjects(action.payload, 'attacker_king'),
          locations: getUniqueObjects(action.payload, 'location'),
        };
      }
      return { ...state, pending: false, data: action.payload };
    case FETCH_DATA_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
