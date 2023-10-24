import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessResult, setGuessResult] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  function checkGuess(guess) {
    if (guess === answer) {
      setStatus('won');
    } else if (guessResult.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setStatus('lost');
    }
  }

  return (
    <>
      <Banner answer={answer} status={status} guessResult={guessResult} />
      <GuessResults guessResult={guessResult} answer={answer} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        setGuessResult={setGuessResult}
        checkGuess={checkGuess}
        status={status}
      />
    </>
  );
}

export default Game;
