
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// layout
import DefaultLayout from './macroComps/Layout/DefaultLayout'
// pages
import AboutUsPage from './macroComps/Pages/AboutUsPage'
import HomePage from './macroComps/Pages/HomePage'
import ProductsPage from './macroComps/Pages/ProductsPage'
import DetailProductPage from './macroComps/Pages/DetailProductPage'
import NotFoundPage from './macroComps/Pages/NotFoundPage'
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/contacts' element={<AboutUsPage />} />
          <Route path='/products'>
            <Route index element={<ProductsPage />} />
            <Route path=':id' element={<DetailProductPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

