import React from 'react'
import NavBar from './NavBar';
import ResultListBox from './ResultListBox';
import WatchedBox from './WatchedBox';
import StarRating from './StarRating';

const App = () => {
  return (
    <div className='p-3 bg-slate-900 w-screen h-screen overflow-hidden'>
      <div>
        {/* Nav Bar */}
        <NavBar /> 
      </div>
      <div>
        {/* left Search Result */}
        <ResultListBox /> 
        {/* Right search */}
        <WatchedBox />
        <StarRating /> 
      </div>
    </div>
  );
}

export default App