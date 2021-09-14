import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/region/asia')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    
    return (
        <div className='home'>
            <div className="py-6">
                {
                    countries.map((item, index) => <SingleCountry key={index} countryData={item}></SingleCountry>)
                }
            </div>
        </div>
    );
};

export default Home;