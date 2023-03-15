import React from 'react'


export default function Quote(props) {

    let w = window.innerWidth

    return (

        <div className="quote--container">
            <h5>Advice #{props.id}</h5>
            <h1>"{props.advice}"</h1>
            <img className="divider--mobile"        
            src={w < 900 ? props.mobileImg : props.desktopImg}
            alt="pattern divider" 
            />
        </div>
    )


}