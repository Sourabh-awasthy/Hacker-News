import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ data }) {
  return (
    <ul className="ml-8 text-left divide-y divide-gray-700">
      {data && data.hits.map((item, index) => (
        <Link to={`/inside/${item.objectID}`} key={index} className="block hover:bg-gray-800">
          <li className="p-4">
            <h3 className="text-lg font-semibold">-{item.title}</h3>
            <p className="text-sm text-gray-200">Author: {item.author}</p>
            <p className="text-sm text-gray-200">Comments: {item.num_comments}</p>
            <p className="text-sm text-gray-200">Points: {item.points}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
