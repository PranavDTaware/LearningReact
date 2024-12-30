import { Routes, Route } from 'react-router-dom';
import Products from '../components/catalog/Products';
import ProductDetails from '../components/catalog/Details';
import ProductInsert from '../components/catalog/Insert';
import ProductUpdate from '../components/catalog/Update';
import ProductDelete from '../components/catalog/Delete';




const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/insert" element={<ProductInsert/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/update/:id" element={<ProductUpdate/>}/>
            <Route path="/delete/:id" element={<ProductDelete/>}/>

        </Routes>
    );
};

export default AppRoutes;