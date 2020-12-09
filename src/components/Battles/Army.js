import React from 'react';

function Army({ label, king, fighters, commanders, size }) {
  return (
    <div className="army">
      <h4>{label}</h4>
      {king && <h2>{`King: ${king}`}</h2>}
      {fighters && <h3>{`Houses: ${fighters}`}</h3>}
      {commanders && <h4>{`Commanders: ${commanders}`}</h4>}
      {size && <p>{`Number of soldiers: ${size}`}</p>}
    </div>
  );
}

export default Army;
