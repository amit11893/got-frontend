import React from 'react';
import { connect } from 'react-redux';
import Army from './Army';
import Outcome from './Outcome';
import { combineStrings, capitalizeFirstLetter } from './../../utils';

function Battle({ battles, index }) {
  const battle = battles[index];
  const attackers = combineStrings(
    battle.attacker_1,
    battle.attacker_2,
    battle.attacker_3,
    battle.attacker_4
  );
  const defenders = combineStrings(
    battle.defender_1,
    battle.defender_2,
    battle.defender_3,
    battle.defender_4
  );
  return (
    <div className="battle">
      <h4>{`${battle.name}, ${battle.summer ? 'Summer' : 'Winter'} ${
        battle.year
      }`}</h4>
      <div className="subheader">
        <span>{capitalizeFirstLetter(battle.battle_type)}</span>
        {` at `}
        <span>{battle.location}</span>
        {`, `}
        <span>{battle.region}</span>
      </div>
      <div className="armies">
        <Army
          label="Attacking"
          king={battle.attacker_king}
          fighters={attackers}
          commanders={battle.attacker_commander}
          size={battle.attacker_size}
        />
        <Army
          label="Defending"
          king={battle.defender_king}
          fighters={defenders}
          commanders={battle.defender_commander}
          size={battle.defender_size}
        />
      </div>
      <Outcome
        note={battle.note}
        capture={battle.major_capture}
        death={battle.major_death}
        wonKing={
          battle.attacker_outcome === 'win'
            ? battle.attacker_king
            : battle.defender_king
        }
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  battles: state.data,
});

export default connect(mapStateToProps, null)(Battle);
