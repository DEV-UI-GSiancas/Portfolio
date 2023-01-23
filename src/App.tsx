import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
// pages
import { HomePage } from './pages/home/Home';
import { CartPage } from "./pages/cart/Cart";
// components
import { Footer } from './common/components/footer/Footer';
// styles
import './App.scss';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<HomePage/>} />
            <Route path={'/cart'} element={<CartPage/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
