import './App.css';
import './common.js';
import Login from "./pages/Login";
import Loading from "./components/common/Loading";


const App = () => {
  return (
    <div className="App">
      <Loading/>
      <Login/>
    </div>
  );
}

export default App;