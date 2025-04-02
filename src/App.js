import { Route, Routes } from "react-router-dom";
import CmsLayout from "./Cms/CmsLayout";
import Allproducts from "./Cms/Pages/Products/AllProducts/Allproducts";
import ProductCategories from "./Cms/Pages/Products/ProductCategory/ProductCategories";
import ProductBrands from "./Cms/Pages/Products/ProductBrands/ProductBrands";
import HeroBanner from "./Cms/Pages/AdsAndPromo/HeroBanner/HeroBanner";
import BrandPromo from "./Cms/Pages/AdsAndPromo/BrandPromo/BrandPromo";
import PromoPoster from "./Cms/Pages/AdsAndPromo/PromoPoster/PromoPoster";
import BannerCategory from "./Cms/Pages/AdsAndPromo/BannerCategory/BannerCategory";
import LoginPage from "./Cms/Pages/Signup/LoginPage";
import AddProduct from "./Cms/Pages/Products/AllProducts/AddProduct";
import ChildProductCategories from "./Cms/Pages/Products/ProductCategory/ChildProductCategories";
import SubProductCategories from "./Cms/Pages/Products/ProductCategory/SubProductCategories";
import MicroProductCategories from "./Cms/Pages/Products/ProductCategory/MicroProductCategories";

function App() {
  return (
    <div className="App font-AnekLatin">
      <Routes>
        <Route path="signup" element={<LoginPage />} />
        
        {/* Nesting routes under CmsLayout */}
        <Route path="/" element={<CmsLayout />}>
          <Route index element={<Allproducts/>} />
          <Route path="products/categories" element={<ProductCategories />} />
          <Route path="products/categories/child-category" element={<ChildProductCategories />} />
          <Route path="products/categories/sub-category" element={<SubProductCategories/>} />
          <Route path="products/categories/micro-category" element={<MicroProductCategories/>} />
          <Route path="products" element={<Allproducts/>} />
          <Route path="products/addproduct" element={<AddProduct/>} />
          <Route path="products/brands" element={<ProductBrands />} />
          <Route path="adsandpromo" element={<HeroBanner />} />
          <Route path="adsandpromo/brands" element={<BrandPromo />} />
          <Route path="adsandpromo/category-banner" element={<BannerCategory />} />
          <Route path="adsandpromo/promotion-poster" element={<PromoPoster />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
