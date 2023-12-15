import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Pages/Homepage';
import Dashboard from './components/Pages/Dashboard';
import Create from './components/Pages/Create';
import NewForm from './components/Pages/NewForm';
import LoginSignup from './components/Pages/LoginSignup';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/form" element={<NewForm />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App
