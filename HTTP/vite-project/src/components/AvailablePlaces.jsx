import Places from './Places.jsx';
import { useEffect, useState } from 'react'

export default function AvailablePlaces({ onSelectPlace }) 
{
  const [ fetchingData, setFetchingData ] = useState();
  const [ availablePlaces, setAvailablePlaces ] = useState([]);

  useEffect(() => {
    async function fetchData()
    {
      setFetchingData(true);
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setFetchingData(false);
    }
    
    fetchData();
  }, []);


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
