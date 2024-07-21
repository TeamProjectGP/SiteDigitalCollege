import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyRequests from "../pages/MyRequests";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/categorias" element={<ProductListingPage />}/>
                <Route path="/produtos" element={<ProductViewPage />}/>
                <Route path="/pedidos" element={<MyRequests />}/>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;