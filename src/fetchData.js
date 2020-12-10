import {
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError,
} from './redux/actionCreators';

function fetchData(url) {
  return (dispatch) => {
    dispatch(fetchDataPending());
    fetch(process.env.BACKEND_URL + url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchDataSuccess(res.data));
        return res.data;
      })
      .catch((err) => dispatch(fetchDataError(err)));
  };
}

export default fetchData;
