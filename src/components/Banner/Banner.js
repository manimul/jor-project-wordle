import React from 'react';

function Banner({ answer, status, guessResult }) {
  return (
    <>
      {status === 'won' && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guessResult.length} guesses</strong>.
          </p>
        </div>
      )}
      {status === 'lost' && (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
