import './App.css'
import {Route,Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import AboutPage from './pages/AboutPage';
import HowPage from './pages/HowPage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import AccountSettingsPage from './pages/AccountSettings';

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how" element={<HowPage />} />
        <Route path="/accountsettings" element={<AccountSettingsPage />} /> {/*added this to see page*/}
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      
    </Routes>
    
  )
}

export default App
