import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  // return <Login />;
  return code ? (
    <Dashboard code={code} />
  ) : (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        <Login />
      </main>
    </div>
  );
}

export default App;
