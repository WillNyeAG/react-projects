import React from 'react';
import Review from './Review';
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}
/* TODO: Add animations when switching, make more design stability for different text sizes(jumps around too muich when a  lot of text is in info), auto scrolling for 1 s*/
export default App;
