import React, { useEffect } from 'react';
import Battle from './Battle';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchData from './../../fetchData';

function Battles({ fetchData, battles, error, pending }) {
  useEffect(() => {
    fetchData('http://localhost:3000/list');
  }, []);
  return (
    <div className="battles">
      {pending && <h2>LOADING......</h2>}
      {error && <h3>Something terrible happened</h3>}
      {battles.length > 0 ? (
        battles.map((battle, index) => {
          return <Battle index={index} />;
        })
      ) : (
        <p>No such battle happened</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.error,
  pending: state.pending,
  battles: state.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Battles);
