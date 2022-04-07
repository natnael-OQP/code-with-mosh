import { useState, useEffect } from 'react'

import * as Location from 'expo-location'

const UseLocation = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    useEffect(() => {
        ;(async () => {
            let { granted } = await Location.requestForegroundPermissionsAsync()
            if (!granted) {
                setErrorMsg('Permission to access location was denied')
                return
            }

            let {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync({})
            setLocation({ latitude, longitude })
        })()
    }, [])
    return { location, errorMsg }
}

export default UseLocation
