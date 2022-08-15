import './App.css';
import data from '../data.json';
import Paintings from './PaintingsList/PaintingsList';
import Section from './Section/Section';

function App() {
  return (
    <div className="App">
      <Section title="Paintings">
        <Paintings paintings={data} />
      </Section>
    </div>
  );
}

export default App;
