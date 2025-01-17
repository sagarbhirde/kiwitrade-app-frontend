import { useState } from 'react'
import './App.css'
import BrowseByCategory from '@components/BrowseByCategory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is the main dashboard page.</h1>
      <BrowseByCategory/>
    </>
  )
}

export default App
