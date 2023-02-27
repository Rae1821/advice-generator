import React from 'react'
// import desktopImg from './pattern-divider-desktop.svg'
import mobileImg from './pattern-divider-mobile.svg'
import dice from './icon-dice.svg'

export default function Quote() {

    const [quote, setQuote] = React.useState('');

    React.useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            setQuote(data.slip)
        })
    }, [])

    return (
        <div>
            <div className="quote--container">
                <h5>Advice #{quote.id}</h5>
                <h2>"{quote.advice}"</h2>
                <img className="divider--mobile"        src={mobileImg} 
                alt="pattern divider" 
                />
            </div>
            <div className="dice--container">
                <img 
                className="dice" 
                src={dice}        
                alt="dice" 
                />
            </div>
        </div>

    )


}