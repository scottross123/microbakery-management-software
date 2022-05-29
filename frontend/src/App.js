import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Records from './pages/Records';
import useFetch from './hooks/useFetch';

function App() {
  return (
    <div className="columns">
      <div className="column">
        <Topbar/>
        <div className="columns">
          <div>
            <Sidebar/>
          </div>
          
          <div>
            <Records/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
