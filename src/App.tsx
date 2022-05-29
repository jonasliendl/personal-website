import React from 'react';
import About from './components/about';
import Socials from './components/socials';
import Header from './components/header';

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen dark:bg-black">
        <Header/>
        <div className="m-auto w-3/4 flex flex-col">
          <About/>
          <Socials/>
        </div>
      </div>
    </div>
  );
}

export default App;
