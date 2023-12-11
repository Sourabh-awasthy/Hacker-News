import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { objectID } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`https://hn.algolia.com/api/v1/items/${objectID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setItemDetails(json);
      } catch (error) {
        console.error("Could not fetch item details:", error);
      }
    };

    fetchItemDetails();
  }, [objectID]);

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='m-3 overflow-x-hidden'>
      <h1 className='font-bold text-center  underline text-2xl'>{itemDetails.title}</h1>
      <p className='text-xl text-right font-semibold'>Points: {itemDetails.points}</p>
      <section>
        <h2 className='text-center font-bold text-xl'>Comments</h2>
        <ul>
          {itemDetails.children.map((child) => (
            <>
            <li className='font-semibold' key={child.id}>#{child.author}</li>
            <li key={child.id}>--{child.text}</li>
        </>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ItemDetail;
