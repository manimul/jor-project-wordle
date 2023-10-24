import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guessResult, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <>
          <Guess key={index} value={guessResult[num]} answer={answer} />
        </>
      ))}
    </div>
  );
}

export default GuessResults;