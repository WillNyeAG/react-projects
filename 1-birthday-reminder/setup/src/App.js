import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return <main>
    <section className='container'>
      {/*TODO: Add sorting buttons for age, name, set a current date and add a birthdate to each person. 
      Show birthdays closest to current date within custom range. */}
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>clear all</button>

    </section>
  </main>;
}

export default App;
