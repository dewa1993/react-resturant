import { useState, useEffect } from 'react'
import yelp from '../api/yelp'


export default () => {

    const [restuarants, setRestaurants] = useState([]);
    const [errorMessage, setError] = useState('')

    const searchApi = async (term) => {

        try {
            const response = await yelp.get('search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose '
                }
            })
            setRestaurants(response.data.businesses)

        } catch (e) {
            setError('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('vodka')
    }, [])

    return [
        searchApi,
        restuarants,
        errorMessage
    ]

}