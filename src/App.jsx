import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)
  const [showPopup, setShowPopup] = useState(false);

  const popUpTime = 5000;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, popUpTime);
    return () => clearTimeout(timeoutId);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <section className='container'>
      {showPopup && (
        <div className="popup">
          <button onClick={closePopup}>Kapat X</button>
          <h1>Size Özel %25 İndirim...</h1>
        </div>
      )}
      <Header />
      <Carousel />
    </section>

  )
}

export default App
