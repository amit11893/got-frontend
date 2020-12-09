import React from 'react';
import Battle from './Battle';

function Outcome({ note, capture, death, wonKing }) {
  return (
    <div>
      <p>
        {(capture || capture === 0) && `Total ${capture} captured and `}{' '}
        {(death || death === 0) && `${death} died, `}
        {wonKing && `${wonKing} won the battle.`}
      </p>
      {note && <p>{`Note: ${note}`}</p>}
    </div>
  );
}

export default Outcome;
