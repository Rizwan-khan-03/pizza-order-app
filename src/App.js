import './App.css';
import { loginUser } from './Redux/reducer';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from './service/services';
import { BrowserRouter } from "react-router-dom";
import Router from './Routes';
function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
