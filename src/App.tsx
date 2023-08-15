import React from 'react';
import './App.css';
import FourierVis from './FourierVis';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Mohamad Jafari</h1>
      </header>
      <main>
        <FourierVis timePerPoint={30} filePath="/points.txt" width={512} height={512} />
      </main>
    </div>
  );
}

export default App;
