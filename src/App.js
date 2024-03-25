import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import Home from './pages/Home';
// import FAQ from './pages/FAQ';
import Layout from './pages/themes/Layout';
import UserManagement from  './pages/UserManagement/UseManagement';
import AddUser from './pages/UserManagement/AddUser';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import UserDetails from './pages/UserManagement/UserDetails';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home/>} />
          <Route path="/UserManagement" element={<UserManagement/>} />
          <Route path="/UserManagement/AddUser" element={<AddUser/>} />
          <Route path="/FAQ" element={<FAQ/>} />
          <Route path="/Contact" element={<ContactUs/>} />
          <Route path="/UserManagement/UserDetails/:id" element={<UserDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
