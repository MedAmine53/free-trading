import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StockDetailPage from './pages/StockDetailPage'
import StockOverViewPage from './pages/StockOverViewPage'
import { WatchListContextProvider } from './ctx/WatchListContext'
import NotFound from './component/NotFound'

function App() {
  return (
    <main className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StockOverViewPage/>} /> 
            <Route path='/detail/:symbol' element={<StockDetailPage />} />
            <Route path='*' element = {<NotFound />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>

    </main>
  )
}

export default App
