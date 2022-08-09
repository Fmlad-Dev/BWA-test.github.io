import React from 'react'
import Weather from './Weather'

function Tile(props)
{
    const[weather, setWeather] = React.useState({})
    const[isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {

        async function grabAPI() {
            const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=095044c035374740864160653220408&q=${props.location}&aqi=no`)

            if(!res.ok){   
                await grabAPIBackup()
            }
            else{
                console.log("API data successfully loaded")
                const data = await res.json()  
                setWeather(data)
                setIsMounted(true)
            } 
        }

        async function grabAPIBackup (){

            const dir = `./Weather/static/${props.location}.json`

            const res = await fetch(dir)
            if(!res.ok){   
                await grabAPIBackup()
            }
            else{
                console.log("Loading static data as API key no longer valid")
                const data = await res.json()
                setWeather(data)
                setIsMounted(true)
            }
        }

        grabAPI()

    }, [])

    if(isMounted){
        return <Weather jsonData={weather}/>
    }
    else{
        return <div>fetching data...</div>
    }

}

export default Tile