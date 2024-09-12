import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hello } from './Hello';
import { Home } from './Home';
import { AboutUs } from './AboutUs';
import { AboutCompany } from './AboutCompany';
import { About } from './About';
import { MainLayout } from './MainLayout';

export const RouterDom = () => {





return (
    <>
<BrowserRouter>
<Routes>
<Route element={<MainLayout />} >
<Route path="/" element={<Home />} />
    <Route path="/hello" element={<Hello />} />
    <Route path="/about/us" element={<AboutUs />} />
    <Route path="/about/company" element={<AboutCompany />} />

    {/* <Route path="/about"  >
    <Route path="/us" element={<AboutUs />} />
    <Route path="/company" element={<AboutCompany />} />
    </Route>

    <Route path="/about" element={<About />} >
    <Route path="/us" element={<AboutUs />} />
    <Route path="/company" element={<AboutCompany />} />
    </Route>

    <Route path="/about" element={<About />} >
    <Route index element={<AboutUs />} />
    <Route path="/company" element={<AboutCompany />} />
    </Route> */}

    <Route path="/prouduct"/>
    <Route path="/prouduct/details"/>
    </Route>

</Routes>
</BrowserRouter>
        </>
)

}