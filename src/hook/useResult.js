import {useEffect, useState} from 'react';
import moviedb from '../api/moviedb'

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("search api called ...")
        try {
            const response = await moviedb.get('/search/movie', {
                params: {
                    api_key: '8c3840e4b2d6509ad49c9ba7a78bd582',
                    query: searchTerm
                }
            });
            setResult(response.data.results)
            setErrorMessage("")
        } catch (error) {
            console.log(error)
            setErrorMessage("Something went wrong ...")
        }
    }

    useEffect(() =>{
        searchApi("Avenger");
    },[]);

    return [searchApi,result,errorMessage];
};