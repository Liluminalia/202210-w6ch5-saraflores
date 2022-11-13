import { Navigate, Route, Routes } from 'react-router-dom';
import CookiesPage from '../pages/cookies/cookies.page';
import MilksPage from '../pages/milks/milks.page';
import SalePage from '../pages/sales/sales.page';
import Home from '../pages/home/home.page';
import DetailsPage from '../pages/details/details.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Home">
                <Route index element={<Home></Home>}></Route>
            </Route>
            <Route path="Cookies" element={<CookiesPage></CookiesPage>}></Route>
            <Route path="Milks" element={<MilksPage></MilksPage>}></Route>
            <Route path="Sales" element={<SalePage></SalePage>}></Route>
            <Route path="Details" element={<DetailsPage></DetailsPage>}></Route>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
            <Route path="*" element={<h1>No se encontró la ruta</h1>}></Route>
        </Routes>
    );
}
