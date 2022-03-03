import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import { Home } from './pages/home';
import { About } from './pages/about';

export const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/home'} element={<Home/>} />
                <Route path={'/about'} element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}