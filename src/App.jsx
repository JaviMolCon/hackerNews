import { useState } from 'react';
import './App.css';
import Navbar from './NavBar';
import NewsEntry from './hackerNews';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   < Navbar />
   < NewsEntry />

    </>
  )
}

export default App
