
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/dashboard';
import NoMatch from './pages/NoMatch/NoMatch';
import PostUser from './pages/employee/PostUser';


function App() {
  return (
    <>  
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/employee' element={<PostUser />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
