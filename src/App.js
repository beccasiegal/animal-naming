import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip message='another tooltip message'>
    officiis
  </Tooltip>
  
function App() {
  return (
    <main className='App'>
      {/* content goes here */}
    </main>
  );
}

export default App;
