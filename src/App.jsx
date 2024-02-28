import './App.scss'
import Details from './components/Details/Details'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Points from './components/Points/Points'
import Register from './components/Register/Register'
import Summary from './components/Summary/Summary'
import Details2 from './components/Details2/Details2'
import Invitation from './components/Invitation/Invitation'
import Takeaways from './components/Takeaways/Takeaways'
import Subscribe from './components/Subscribe/Subscribe'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Register />
      <Details />
      <Points />
      <Summary />
      <Details2 />
      <Invitation />
      <Takeaways />
      <Subscribe />
    </>
  )
}

export default App
