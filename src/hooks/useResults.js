import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(query) => {

        console.log("hh", query, "hh");

        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: query.food,
                    location: query.location
                }
            });
            setResults(response.data.businesses);
            console.log(response.data.businesses.length);
        } catch(err) {
            setErrorMessage('Something went wrong');
            console.log(err);
        }
    };

    useEffect(() => {
        searchApi({food: 'pasta', location: 'edmonton'});
    }, []);

    return [searchApi, results, errorMessage];
};