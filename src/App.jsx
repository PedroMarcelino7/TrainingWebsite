import './App.scss'
import Details from './components/Details/Details'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'

function App() {
  function userScroll() {
    const navbar = document.querySelector('.navbar')

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-dark')
      } else {
        navbar.classList.remove('bg-dark')
      }
    })
  }

  document.addEventListener('DOMContentLoaded', userScroll())

  return (
    <>
      <Navbar />
      <Header />
      <Register />
      <Details />
    </>
  )
}

export default App
