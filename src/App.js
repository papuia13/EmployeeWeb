
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/dashboard';
import Crud from './pages/dashboard/crud';
import NoMatch from './pages/NoMatch/NoMatch';

function App() {
  return (
    <>  
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/employee' element={<Crud />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
