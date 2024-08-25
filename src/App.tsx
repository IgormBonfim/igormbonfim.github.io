import './App.css'
import Navbar from './components/Navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <main className="w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto px-8">
        <Navbar></Navbar>
        <Outlet/>
      </div>
    </main>
  )
}

export default App