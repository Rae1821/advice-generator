import React from 'react'


export default function Quote(props) {

    let w = window.innerWidth

    return (
        <div>
            <div className="quote--container">
                <h5>Advice #{props.id}</h5>
                <h2>"{props.advice}"</h2>
                <img className="divider--mobile"        
                src={w < 900 ? props.mobileImg : props.desktopImg}
                alt="pattern divider" 
                />
            </div>
        </div>

    )


}