
import './App.css'
import dice from './icon-dice.svg'
import Quote from './Quote'
import mobileImg from './pattern-divider-mobile.svg'
import desktopImg from './pattern-divider-desktop.svg'
import { useState, useEffect } from 'react'

const App = () => {

  const [quote, setQuote] = useState("")
 

  const quoteApi = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => {
          if(!res.ok) {
            throw Error("something went wrong")
          }
           return res.json()
           })
        .then(data => {
          setQuote(data.slip)
        })
        .catch(err => console.log(err))
  }

  useEffect(() => {
      quoteApi() 
  }, [])
  
  
       

  return (
    <div className="App">

    <Quote 
        advice={quote.advice}
        id={quote.id}  
        mobileImg={mobileImg}
        desktopImg={desktopImg}
    />

  
    <button 
        onClick={quoteApi}
        className="dice--btn">
        <img 
        className="dice" 
        src={dice}        
        alt="dice" 
        />
    </button>
    
    </div>
  )
}

export default App;
