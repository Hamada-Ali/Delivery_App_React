import React, { useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header, MainContainer, CreateContainer } from './components'
import Provider, { useTheContext } from './context/Provider.jsx'
import { actionType } from './context/Reducer'
import {getAllFoodItems} from './utils/firebaseFunction'

function App() {

  const [{ foodItems }, dispatch] = useTheContext()

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
       dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data
       })
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AnimatePresence mode='wait'>
      <div className='w-screen h-auto flex flex-col bg-primary'>
          <Header />
          <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
              <Routes>
                  <Route path='/*' element={<MainContainer />}/>
                  <Route path='/createItem' element={<CreateContainer/>}/>
              </Routes> 
          </main>
      </div>
    </AnimatePresence>
  )
}

export default App