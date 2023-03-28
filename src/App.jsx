import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Fund } from './page/Fund'
import { Home } from './page/Home'
import { Programs } from './page/Programs'
import { HOME, FUND, PROGRAMS } from './routes/constans'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={HOME} exact element={<Home />} />
          <Route path={FUND} exact element={<Fund />} />
          <Route path={PROGRAMS} exact element={<Programs />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
