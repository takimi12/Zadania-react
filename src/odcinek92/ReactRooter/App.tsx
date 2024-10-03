import { BrowserRouter, Routes, Route, createBrowserRouter, Navigate } from 'react-router-dom';
import { Hello } from './Hello';
import { Home } from './Home';
import { AboutUs } from './AboutUs';
import { AboutCompany } from './AboutCompany';
import { About } from './About';
import { MainLayout } from './MainLayout';
import { AboutOutlet } from './AboutOutlet';
import { AboutOutletLink } from './AboutOutletLink';
import { Product } from './Product';
import { ProductsDetails } from './ProductsDetails';
import { ProductsDetailsWithLink } from './ProductDetailsWithLink';





export const RouterDom = () => {

return (
    <>
<BrowserRouter>
<Routes>

{ /* podstawowe uycie */}
 <Route path="/" element={<Home />} />
<Route path="/" element={<h1>Hello world!</h1>} /> 
    <Route path="/hello" element={<Hello />} />


    { /* 2 sposob */}
    <Route path="/" element={<Home />} />
    <Route path="/hello" element={<Hello />} />

<Route path="/about"  >
    <Route path="us" element={<AboutUs />} />
    <Route path="company" element={<AboutCompany />} />
    </Route>

    { /* 3 sposob */}
    <Route path="/" element={<Home />} />
    <Route path="/hello" element={<Hello />} />

<Route path="/about"  element={<About />} >
    <Route path="/us" element={<AboutUs />} />
    <Route path="/company" element={<AboutCompany />} />
    </Route>

    { /* 3 sposob ---- LAYOUT ROUTES +++++ OUTLET */}

    <Route path="/" element={<Home />} />
    <Route path="/hello" element={<Hello />} />

<Route path="/about"  element={<AboutOutlet />} >
    <Route path="/us" element={<AboutUs />} />
    <Route path="/company" element={<AboutCompany />} />
    </Route>


    { /* 4 sposob ---- LAYOUT ROUTES +++++ OUTLET +++++ Link ++++ single dot */}

<Route path="/" element={<Home />} />
<Route path="/hello" element={<Hello />} />

<Route path="/about"  element={<AboutOutletLink />} >
<Route index element={<AboutUs />} />
<Route path="/company" element={<AboutCompany />} />
</Route>

{/* **************** MAIN LAYOUT + OUTLET */}

<Route element={<MainLayout />}>
<Route path="/" element={<Home />} />
<Route path="/hello" element={<Hello />} />

<Route path="/about"  element={<AboutOutletLink />} >
<Route index element={<AboutUs />} />
<Route path="/company" element={<AboutCompany />} />
</Route>
    <Route path="/prouduct" element={<Product />}/>
    <Route path="/prouduct/details" element={<ProductsDetails />}/>
</Route>

{/* **************** MAIN LAYOUT + OUTLET + productdatils with link*/}

<Route element={<MainLayout />}>
<Route path="/" element={<Home />} />
<Route path="/hello" element={<Hello />} />

<Route path="/about"  element={<AboutOutletLink />} >
<Route index element={<AboutUs />} />
<Route path="/company" element={<AboutCompany />} />
<Route path='*' element={<Navigate to="." />} />
</Route>
    <Route path="/prouduct" element={<Product />}/>
    <Route path="/prouduct/details" element={<ProductsDetailsWithLink />}/>
</Route>
<Route path='*' element={<Navigate to="/hello" />} />

</Routes>



</BrowserRouter>
        </>
)

}