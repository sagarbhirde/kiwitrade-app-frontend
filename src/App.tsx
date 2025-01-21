import { useState } from 'react'
import './App.css'
import BrowseByCategory from '@components/BrowseByCategory'
import Header from './components/Header/index'
import FeaturedAds from './components/FeaturedAds/FeaturedAds'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <h1>This is the main dashboard page.</h1>
      <BrowseByCategory/>
      <FeaturedAds/>
    </>
  )
}

export default App
