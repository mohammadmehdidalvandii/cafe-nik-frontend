import React, { Suspense } from 'react'
import { QueryProvider } from '@providers/QueryProvider'
import { ToasterProvider } from '@providers/ToasterProvider'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

const App:React.FC = ()=>{
  return (
    <QueryProvider>
      <ToasterProvider/>
      <BrowserRouter>
        <Suspense fallback={<h1>لطفا منتظر باشید</h1>}>
          <Routes>
            
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryProvider>
  )
}

export default App