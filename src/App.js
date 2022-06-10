import { Route, Routes } from 'react-router';
import './App.css';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;
