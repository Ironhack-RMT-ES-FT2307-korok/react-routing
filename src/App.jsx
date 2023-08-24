
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import TimerControl from './pages/TimerControl'

function App() {

  return (
    <>
      
      <nav>
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}

        <Link to="/">Home</Link>

        {/* <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/timer">Timer</Link> */}
      </nav>

      <h1>Aprendiendo Routing</h1>

      <Routes>

        <Route path="/" element={ <Home /> }/>
        {/* <Route path="/about" element={ <About /> }/>
        <Route path="/profile/:username" element={ <Profile data={["patata"]}/> } />
        <Route path="/timer" element={ <TimerControl /> } /> */}

        <Route path="*" element={ <NotFound />} />

      </Routes>

    </>
  )
}

export default App
