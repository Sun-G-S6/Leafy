import './App.css'
import {Route,Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import AboutPage from './pages/AboutPage';
import HowPage from './pages/HowPage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import SearchPage from './pages/SearchPage';
import AccountPage from './pages/AccountPage';
//import AccountSettingsPage from './pages/AccountSettings';
import ProductsPage from './pages/ProductsPages';
import ProductsFormPage from './pages/ProductsFormPage';
import SearchedProductPage from './pages/SearchedProductPage';
import AccountSettings from './pages/AccountSettings';

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how" element={<HowPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/account/:subpage/:action" element={<AccountPage />} />
          {/* <Route path="/accountsettings" element={<AccountSettingsPage />} /> */}
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/settings" element={<AccountSettings />} />
          <Route path="/account/products" element={<ProductsPage />} />
          <Route path="/account/products/new" element={<ProductsFormPage />} />
          <Route path="/account/products/:id" element={<ProductsFormPage />} />
          <Route path="/product/:id" element={<SearchedProductPage />} />
          {/* <Route path="/carousel" element={<CarouselPage />} /> */}
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App