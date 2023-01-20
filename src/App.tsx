import {ApisInstance} from './common/util/Apis';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
// pages
import { HomePage } from './pages/home/Home';
import { CartPage } from "./pages/cart/Cart";
// styles
import './App.scss';
import { Footer } from './common/components/footer/Footer';

const App = () => {

  ApisInstance.init(
    axios.create({baseURL: "http://localhost/software_store_api/apis/v1"})
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage/>} />
          <Route path={'/cart'} element={<CartPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
