import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [index, setIndex] = useState(0);
  const quates = [
    'Be yourself; everyone else is already taken   ― Oscar Wilde',
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.― Marilyn Monroe”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein",
    '“So many books, so little time.” ― Frank Zappa',
    '“A room without books is like a body without a soul.” - Marcus Tullius Cicero',
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ― Bernard M. Baruch",
    '“You only live once, but if you do it right, once is enough.” ― Mae West',
    '“Be the change that you wish to see in the world.” - Mahatma Gandhi',
    "“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost",
    "“If you tell the truth, you don't have to remember anything.” ― Mark Twain",
    '“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard',
  ];

  return (
    <div
      style={{
        width: '29rem',
        border: '5px solid tomato',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '7rem',
        padding: '50px',
      }}
    >
      <h1 style={{ textDecoration: 'underline' }}>Random Quote Generator</h1>
      <div
        style={{
          backgroundColor: 'darkred',
          height: '10rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>{quates[index]}</p>
      </div>
      <button
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          backgroundColor: 'blue',
          padding: '10px 30px',
          borderRadius: '50px',
          color: 'white',
          marginTop: '3rem',
          cursor: 'pointer',
        }}
        onClick={() => {
          const randomIndex = (Math.random() * 10).toFixed(0);
          setIndex(randomIndex);
        }}
      >
        Next
      </button>
    </div>
  );
}
