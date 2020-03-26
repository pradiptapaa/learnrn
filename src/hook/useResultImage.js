import {useEffect, useState} from 'react';
import moviedb from '../api/moviedb'

export default () => {
    const [config, setConfig] = useState([]);
    const [configErrorMessage, setConfigErrorMessage] = useState('');

    const configApi = async () => {
        console.log("search api called ...")
        try {
            const response = await moviedb.get('/configuration', {
                params: {
                    api_key: '8c3840e4b2d6509ad49c9ba7a78bd582'
                }
            });
            setConfig(response.data.images)
            setConfigErrorMessage("")
        } catch (error) {
            console.log(error)
            setConfigErrorMessage("Something went wrong ...")
        }
    }

    useEffect(() =>{
        configApi();
    },[]);

    return [configApi,config,configErrorMessage];
};