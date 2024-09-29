import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

const App = ()=>{
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App