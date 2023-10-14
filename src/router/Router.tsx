import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "../pages/InitialPage/InitialPage";
import Ementary from "../pages/Ementary/Ementary";
import TCC from "../pages/TCC/TCC";


function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitialPage />} />
                    <Route path="/ementario" element={<Ementary />} />
                    <Route path="/tcc" element={<TCC />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;

