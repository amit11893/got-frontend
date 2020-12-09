import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './actionCreators';

const initialState = {
  pending: false,
  data: [],
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return { ...state, pending: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, pending: false, data: action.payload };
    case FETCH_DATA_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
