import './App.css';
import Square from './component/Square';

function App() {
  return (
    <div className="App">
      
      <div className='row'>
      <Square/><Square/><Square/>
      </div>
      
      <div className='row'>
      <Square/><Square/><Square/>
      </div>

      <div className='row'>
      <Square/><Square/><Square/>
      </div>

    </div>
  );
}

export default App;
