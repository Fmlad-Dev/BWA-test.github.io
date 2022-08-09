import React from "react"
import HeaderIcon from '../images/Fill213.png'

export default function Header(){
    return(
        <nav>
            <img src={HeaderIcon} />
            <h2>My travel journal</h2>
        </nav>
    )
}