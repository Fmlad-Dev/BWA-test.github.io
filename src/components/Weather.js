import React from 'react'

function Weather(props)
{   
    const {name, country} = props.jsonData.location
    const {temp_c, humidity, cloud, feelslike_c, wind_dir, wind_mph} = props.jsonData.current
    const {icon} = props.jsonData.current.condition

    return(
        <div className="holder">
    
            <img src={icon} />
            <h1>{name}</h1>
            <p className="region">{country}</p>
            <p className="temp"><strong>Temperature:</strong> {temp_c}</p>
            <p className="feels"><strong>Feels like:</strong> {feelslike_c}</p>
            <p className="humid"><strong>Humidity:</strong> {humidity}</p>
            <p className="cloud"><strong>Cloud:</strong> {cloud}</p>
            <p className="wind"><strong>Wind:</strong> {wind_dir} ({wind_mph})</p>

        </div>
    )
}

export default Weather