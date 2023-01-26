import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
// pages
import { HomePage } from './pages/home/Home';
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
          </Routes>
          <Footer/>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
