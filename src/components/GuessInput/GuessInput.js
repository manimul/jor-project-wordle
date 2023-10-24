import React from 'react';

function GuessInput({ guess, setGuess, setGuessResult, checkGuess, status }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setGuess(guess);
        setGuessResult((guessResult) => [...guessResult, guess]);
        checkGuess(guess);
        setGuess('');
      }}
      className='guess-input-wrapper'
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={status !== 'running'}
        required
        minLength={5}
        maxLength={5}
        value={guess}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        id='guess-input'
        type='text'
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
