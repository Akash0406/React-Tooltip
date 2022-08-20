import './App.css';

import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip position="top" content="I Am Akash Kumar Singh" animationDuration={600}>
        <p className='tip'>I Am Akash Kumar Singh</p>
      </Tooltip>
      <Tooltip position="top" content="TOP">
        <button>TOP</button>
      </Tooltip>
      <Tooltip position="bottom" content="BOTTOM">
        <button>BOTTOM</button>
      </Tooltip>
      <Tooltip position="left" content="LEFT">
        <button>LEFT</button>
      </Tooltip>
      <Tooltip position="right" content="RIGHT">
        <button>RIGHT</button>
      </Tooltip>

    </div>
  );
}

export default App;