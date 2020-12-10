import {
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError,
} from './redux/actionCreators';

function fetchData(url) {
  return (dispatch) => {
    dispatch(fetchDataPending());
    fetch(
      'https://app-d78e8da9-5094-4938-9d72-4db84f2789ef.cleverapps.io' + url
    )
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
