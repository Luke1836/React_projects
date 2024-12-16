import { useRef, useState, useEffect } from 'react';
import Places from './Components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './Components/Modal.jsx';
import DeleteConfirmation from './Components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';
 

function App() 
{
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [ availablePlaces, setAvailablePlaces ] = useState([]);

  // Side Effect of finding the nearby tourist places. Need to be executed once after the entire App component has finished it's execution
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      )
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) 
  {
    modal.current.open();
    selectedPlace.current = id;
  }


  function handleStopRemovePlace() 
  {
    modal.current.close();
  }


  function handleSelectPlace(id) 
  {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem('storedPlaces')) || []; //Added a fallback if the first one returns undefined
    if(storedIds.indexOf(id) === -1)
    {
      localStorage.setItem('storedPlaces', JSON.stringify([id, ...storedIds]));
    }
  }


  function handleRemovePlace() 
  {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

    const storedIds = JSON.parse(localStorage.getItem('storedPlaces')) || [];
    localStorage.setItem(
      'StoredPlaces', 
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)
    ))
  }


  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel = { handleStopRemovePlace }
          onConfirm = { handleRemovePlace }
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText="Sorting Places by Distance..."
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
