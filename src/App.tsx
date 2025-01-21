import './App.css'
import BrowseByCategory from '@components/BrowseByCategory'
import Header from './components/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
       <Header/>
      <h1>This is the main dashboard page.</h1>
      <BrowseByCategory/>
      <Footer/>
    </>
  )
}

export default App
