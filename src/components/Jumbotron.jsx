import React from 'react';

export default function Jumbotron({ direction = 'flex-row' }) {
  return (
    <div className={`flex ${direction} items-center justify-between w-full max-w-screen-lg md:flex-column`}>
      <p>I am Jumbo</p>
    </div>
  );
}
