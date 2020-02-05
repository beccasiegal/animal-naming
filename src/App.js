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
);

function App() {
  const arrayOfImgs = apiResponse.items.map((item) =>
    <li key={item.id}>
      {item.name}
    </li>
  );
  return (
    <main className='App'>
      <p>Select the animal you'd like to name</p>
      <ul>
        {arrayOfImgs}
      </ul>
    </main>
  );
}
export default App;
