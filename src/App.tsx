import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import type { Technology } from './types/Technology'

const technologyFetch = async():Promise<Technology[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}



function App() {

  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    </>
  )
}

export default App
