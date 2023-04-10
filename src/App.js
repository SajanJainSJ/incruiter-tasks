import './App.css';
import HighlightedText from './highlight/HighlightedText';
import BarChart from './chart/BarChart';

function App() {
  return (
    <div className="App">
      <h2>HIGHLIGHTED TEXT WITHOUT LIBRARY</h2>
      <HighlightedText />
      <hr />
      <h2>DISTRIBUTION COMPARISON</h2>
      <BarChart />
    </div>
  );
}

export default App;
