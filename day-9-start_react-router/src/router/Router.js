import {Routes, Route} from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import NotFound from "../components/NotFound";

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default Router;
