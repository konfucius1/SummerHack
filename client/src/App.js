import Login from './components/Login';
import Dashboard from './components/Dashboard';
// import Genre from './components/Genre';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  // return <Genre />;
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
