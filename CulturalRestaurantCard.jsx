import React from 'react';

export default function CulturalRestaurantsCard({ name, cuisine, location, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={`${name} restaurant`} />
      <h3>{name}</h3>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p 
        onClick={() => alert(`Viewing menu for ${name}!`)} 
        className="view-menu-btn"
        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', marginTop: '4px' }}
      >
        View Menu
      </p>
      <p>{description}</p>
      <p><em>{location}</em></p>
    </div>
  );
}
