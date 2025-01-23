import { useState } from 'react'
import './App.css'
import BrowseByCategory from '@components/BrowseByCategory'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowseByCategory/>
    </>
  )
}

export default App
