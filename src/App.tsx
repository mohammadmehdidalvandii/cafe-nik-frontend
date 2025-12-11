import React, { lazy, Suspense } from 'react'
import { QueryProvider } from '@providers/QueryProvider'
import { ToasterProvider } from '@providers/ToasterProvider'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

const Home = lazy(()=>import('@pages/Home/Home'));

const App:React.FC = ()=>{
  return (
    <QueryProvider>
      <ToasterProvider/>
      <BrowserRouter>
        <Suspense fallback={<h1>لطفا منتظر باشید</h1>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryProvider>
  )
}

export default App