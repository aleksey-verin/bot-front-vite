import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Form from './components/Form/Form'
const tg = window.Telegram.WebApp

function App() {
  // const onClose = () => {
  //   tg.close()
  // }

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <main>
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </main>
  )
}

export default App
