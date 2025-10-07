
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// layout
import DefaultLayout from './macroComps/Layout/DefaultLayout'
// pages
import AboutUsPage from './macroComps/Pages/AboutUsPage'
import HomePage from './macroComps/Pages/HomePage'
import ProductsPage from './macroComps/Pages/ProductsPage'
import DetailProductPage from './macroComps/Pages/DetailProductPage'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/contacts' element={<AboutUsPage />} />
          <Route path='/products'>
            <Route path='/' element={<ProductsPage />} />

            <Route path='/:id' element={<DetailProductPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

