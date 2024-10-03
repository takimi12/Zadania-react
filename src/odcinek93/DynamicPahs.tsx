import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../odcinek92/ReactRooter/MainLayoutWithAppLink';
import { Home } from '../odcinek92/ReactRooter/Home';
import { Hello } from '../odcinek92/ReactRooter/Hello';
import { AboutUs } from '../odcinek92/ReactRooter/AboutUs';
import { AboutOutletLink } from '../odcinek92/ReactRooter/AboutOutletLink';
import { AboutCompany } from '../odcinek92/ReactRooter/AboutCompany';
import { Product } from '../odcinek92/ReactRooter/Product';
import { ProductsDetailsWithLink } from '../odcinek92/ReactRooter/ProductDetailsWithLink';
import { DynamicProduct } from './DynamicProduct';
import { FooBar } from './FooBar';
import { Content } from './Content';
import { Payment } from './Payment';
import { Dashboard } from './dashboard';
import { ProtectedRoute } from './routes/ProtectedRoute';


export const DynamicPaths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/hello" element={<Hello />} />

      <Route element={<ProtectedRoute /> }>
             <Route  path="/dashboard" element={<Dashboard />} />
      </Route>

            <Route path="/about" element={<AboutOutletLink />}>
              <Route index element={<AboutUs />} />
              <Route path="company" element={<AboutCompany />} />
              <Route path="*" element={<Navigate to="." />} />
            </Route>
            

            <Route path="/product" element={<Product />} />
            <Route path="/product/details" element={<ProductsDetailsWithLink />} />
            <Route path="/product/:productId/:additionalParam?" element={<DynamicProduct />} />
            <Route path='/foo/bar?' element={<FooBar/>}/>
            <Route path='/content' element={<FooBar/>}/>            
            <Route path='/:lang?/content' element={<Content />} />

    <Route path='payment' element={<Payment />} />

          </Route>
          
 
          <Route path="*" element={<Navigate to="/hello" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
