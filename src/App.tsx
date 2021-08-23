import React from 'react'; 
import './App.css';
import { Panel } from './features/panel/Panel';
import { Polygon } from './features/polygon/Polygon';

function App() {
  return (
    <div className="App">
          <Panel />
        <Polygon/>
    
    </div>
  );
}

export default App;
