import React, { useState } from 'react';

// Define a type for the address state
type AddressType = {
  city: string |null;
  street: string | null;
  country: string | null;
};

const Address: React.FC = () => {
  // Initialize the address state with an empty object
  const [address, setAddress] = useState<AddressType>({
    city: null,
    street: null,
    country: null,
  });

  const change = () => {
    // Define a list of cities
    const cities = ['Warszawa', 'Krakow', 'Gdansk'];
    // Select a random index
    const randomIndex = Math.floor(Math.random() * cities.length);
    // Get a random city from the list
    const randomCity = cities[randomIndex];

    // Update the state with a new city while keeping other fields unchanged
    setAddress((prevAddress) => ({
      ...prevAddress,
      city: randomCity,
    }));
  };

  return (
    <div>
      <button onClick={change}>Add</button>
      <h1>{address.city}</h1>
      <h1> {address.street} </h1>
      <h1>{address.country}</h1>
    </div>
  );
};

export default Address;
