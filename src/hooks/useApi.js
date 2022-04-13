import { useState } from 'react'
import instance from '../api/fetch'

function useApi() {
    const [listings, setListings] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetcher = async (uri) => {
        try {
            setLoading(true)
            const { data } = await instance.get(uri)
            setListings(data)
            setLoading(false)

            setError(false)
        } catch (err) {
            setError(true)
            setLoading(false)
        }
    }

    return { fetcher, listings, error, loading }
}

export default useApi
