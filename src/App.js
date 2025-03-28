import { Route, Routes } from "react-router-dom";
import CmsLayout from "./Cms/CmsLayout";
import Allproducts from "./Cms/Pages/Products/Allproducts";
import ProductCategories from "./Cms/Pages/Products/ProductCategories";
import ProductBrands from "./Cms/Pages/Products/ProductBrands";
import HeroBanner from "./Cms/Pages/AdsAndPromo/HeroBanner";
import BrandPromo from "./Cms/Pages/AdsAndPromo/BrandPromo";
import PromoPoster from "./Cms/Pages/AdsAndPromo/PromoPoster";
import BannerCategory from "./Cms/Pages/AdsAndPromo/BannerCategory";
import LoginPage from "./Cms/Pages/Signup/LoginPage";

function App() {
  return (
    <div className="App font-AnekLatin">
      <Routes>
        <Route path="signup" element={<LoginPage />} />
        
        {/* Nesting routes under CmsLayout */}
        <Route path="/" element={<CmsLayout />}>
          <Route index element={<Allproducts/>} />
          <Route path="products/categories" element={<ProductCategories />} />
          <Route path="products/allproducts" element={<Allproducts/>} />
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
