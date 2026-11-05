import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import type { Technology } from './types/Technology'
import Technologies from './components/technologies/Technologies'

const technologiesPromise = async():Promise<Technology[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {

  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <Suspense fallback={<p>Loading....</p>}>
    <Technologies technologiesPromise={technologiesPromise()}></Technologies>
    </Suspense>
    </>
  )
}

export default App
