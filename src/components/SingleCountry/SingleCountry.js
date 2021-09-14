import React from 'react';

const SingleCountry = ({ countryData }) => {
    
    return (
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-6">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={countryData.flag} alt="flag" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{countryData?.name}</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{countryData?.capital}</a>
                    <p className="mt-2 text-gray-500">{countryData.region}</p>
                    <div className="md:grid grid-cols-2 grid-gap-4">
                        <p className="mt-2 text-gray-500"><span className='text-lg font-semibold'>Subregion:</span> {countryData?.subregion}</p>
                        <p className="mt-2 text-gray-500 ml-4"><span className='text-lg font-semibold'>Population:</span> {countryData?.population}</p>
                        <p className="mt-2 text-gray-500"><span className='text-lg font-semibold'>Languages:</span> {countryData?.languages[0]?.nativeName}</p>
                        <p className="mt-2 text-gray-500"><span className='text-lg font-semibold'>Border:</span> {countryData?.borders[0]}</p>
                        <p className="mt-2 text-gray-500"><span className='text-lg font-semibold'>Border:</span> {countryData?.borders[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCountry;