import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "pages/Favorites";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import DefaultPage from "pages/DefaultPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultPage/>}>                
                    <Route index element={<Home/>}/>
                    <Route path="favoritos" element={<Favorites/>}/>
                    <Route path=":id" element={<Player/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>            
        </BrowserRouter>

    )
}

export default AppRoutes;