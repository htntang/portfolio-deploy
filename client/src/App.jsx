import { useState } from 'react'
import './App.css'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Footer from './Routes/Footer'
import Header from './Routes/Header'
import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="App.css" /> 

    <Header />
    <HomePage />
    <Footer />
    </>
  )
}

export default App
