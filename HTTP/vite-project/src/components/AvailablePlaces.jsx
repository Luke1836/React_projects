import Places from './Places.jsx';
import { useEffect, useState } from 'react'
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) 
{
  const [ fetchingData, setFetchingData ] = useState();
  const [ availablePlaces, setAvailablePlaces ] = useState([]);
  const [ error, setError ] = useState();

  useEffect(() => {
    async function fetchData()
    {
      try {
        setFetchingData(true);
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();
        setAvailablePlaces(resData.places);
        if(!response.ok)
          throw new Error('Failed to fetch the data!');

        navigator.geolocation.getCurrentPosition((position) => {
              const sortedPlaces = sortPlacesByDistance(
                resData.places,
                position.coords.latitude,
                position.coords.longitude
              )
              setAvailablePlaces(sortedPlaces);
              setFetchingData(false);
        });

      }
      catch(error)
      {
        setError({
          message: error.message || "Couldn't fetch the data! Please try again later!" 
        });
        setFetchingData(false);
      }     
    }
    
    fetchData();
  }, []);


  if(error)
    return (
      <Error title="An Error has occured" message={ error.message } />
    )

  
  return (
    <Places
      title="Available Places"
      isLoading={ fetchingData }
      loadingText="Fetching Data...."
      places={ availablePlaces }
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
