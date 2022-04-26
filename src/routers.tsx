import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import { Home } from './pages/home';
import { About } from './pages/about';

// components
// import {Header} from './common/components/header';
import {Footer} from './common/components/footer';

export const Routers = () => {
    return(
        <BrowserRouter>
            {/* <Header /> */}
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/home'} element={<Home/>} />
                    <Route path={'/about'} element={<About/>} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}