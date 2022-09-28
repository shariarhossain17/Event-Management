import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/create'element={<CreateEvent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
