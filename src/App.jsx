
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import TimerControl from './pages/TimerControl'
import PokemonList from './components/PokemonList'
import PokemonProfile from './pages/PokemonProfile'

function App() {

  return (
    <>
      
      <nav>
        {/* <a href="/">Home</a> */}
        {/* <a href="/about">About</a> */}

        <Link to="/">Home</Link>

        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/profile">Profile</Link> */}
        {/* <Link to="/timer">Timer</Link> */}
      </nav>

      <div style={{display: "flex", justifyContent: "space-around"}}>

      <PokemonList />

      <Routes>

        <Route path="/" element={ <Home /> }/>
        {/* <Route path="/about" element={ <About /> }/> */}
        {/* <Route path="/profile/:username" element={ <Profile data={["patata"]}/> } /> */}
        {/* <Route path="/timer" element={ <TimerControl /> } /> */}
        <Route path="/poke/:pokeName" element={ <PokemonProfile/> }/>

        <Route path="*" element={ <NotFound />} />

      </Routes>

      </div>


    </>
  )
}

export default App
