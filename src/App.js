import React from 'react';
import './App.css';
import clouds from './Media/cloud.png'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='logo'>
          <div className='logo-hsr'><h1>HSR</h1></div>
          <div className='slogo'>
            <h1>Hector Airlines</h1>
            <h2>The Best Flights Around</h2>
          </div>
        </div>
        <nav className='nav'>
          <ul>
            <li>Home</li>
            <li>Flights</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <body className='banner'>
        <div className='left-side'>
          <div className='info'>
              <h2>Are you ready for</h2>
              <h1>Take-Off?</h1>
              <p>Let's start Day 2 with a hero-banner of airlines website. I find ideas for User Interfaces and designs on Pinterest.</p>
          </div>
          <div className='buttons'>
            <button>Learn More</button>
            <button className='book-now'>Book Now</button>
          </div>
        </div>
        <div className='visual-section'>
            <img className='clouds' src={clouds} />
        </div>
      </body>
    </div>
  );
}

export default App;
