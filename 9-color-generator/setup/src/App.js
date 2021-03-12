import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors)
    }
    catch (error) {
      setError(true);
      console.log("Unable to parse color");
    }

  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#03a9fc' className={`${error ? 'error' : null}`} />
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          console.log(color)
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </>
  );
}

export default App
// TODO: if no input at beginning, rainbow shift thru color
// Add color picker for friendly UI option
