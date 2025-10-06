import MyMain from './macroComps/MyMain'
import MyHeader from './macroComps/MyHeader'
import MyFooter from './macroComps/MyFooter'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// layout
import DefaultLayout from './macroComps/Layout/DefaultLayout'
// pages
import AboutUsPage from './macroComps/Pages/AboutUsPage'
import HomePage from './macroComps/Pages/HomePage'
import ProductsPage from './macroComps/Pages/ProductsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route index element={HomePage}/>
          <Route path='/contatti' element={AboutUsPage}/>
          <Route path='/prodotti' element={ProductsPage}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
