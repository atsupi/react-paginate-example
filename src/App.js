import './App.css';
import { PaginatedItems } from './components/PaginatedItems';

function App() {
  return (
    <div className="App">
      <PaginatedItems itemsPerPage={4} />
    </div>
  );
}

export default App;
