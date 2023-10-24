import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ value, answer, num }) {
  const guessChecked = checkGuess(value, answer);

  return (
    <span
      className={`cell ${guessChecked ? guessChecked[num].status : ''} `}
      key={num}
    >
      {value ? value[num] : undefined}
    </span>
  );
}

function Guess({ value, answer }) {
  return (
    <>
      <p className='guess'>
        {range(5).map((num) => (
          <Cell value={value} answer={answer} num={num} />
        ))}
      </p>
    </>
  );
}

export default Guess;
