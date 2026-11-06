import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import type { Technology } from './types/Technology'
import Technologies from './components/technologies/Technologies'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

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
    <Footer></Footer>
    <ToastContainer position='top-right' autoClose={2000}/>
    </>
    )
}

export default App
