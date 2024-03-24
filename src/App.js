import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Crypto from './components/Crypto/Crypto';


function App() {
  return (
    <div style={{backgroundColor:"#070F2B", minHeight:"100vh"}} className="App">
      <Crypto />
    </div>
  );
}

export default App;
