import React from 'react';
import CulturalRestaurantCard from './components/CulturalRestaurantCard';
import './index.css';

const restaurants = [
  {
    name: 'Jambo Grill Atl',
    cuisine: 'Kenyan',
    image: '/images/Kenyanrestaurant.JPEG'
  },
  {
    name: 'Edo Japanese Cuisine',
    cuisine: 'Japanese',
    image: '/images/Japanese.JPEG'
  },
  {
    name: 'L Antoinette French Restaurant',
    cuisine: 'French',
    image: '/images/French.JPEG'
  },
  {
    name: 'Ela',
    cuisine: 'Mediterranean',
    image: '/images/med.JPEG'
  },
  {
    name: 'Gympsy Kitchen',
    cuisine: ' Spanish',
    image: '/images/spanish.JPEG'
  },
  {
    name:'Gigis Italian Kitchen & Restaurant',
    cuisine: 'Italian',
    image: '/images/italian.JPEG'
  },
  {
    name:'Rock Steady',
    cusine: 'Caribbenn',
    image: '/images/rock.JPEG'
  },
  {
    name:'Southern National',
    cuisine: 'American',
    image: '/images/american.JPEG'
  },
  {
    name: 'Delbar- Inman Park',
    cuisine: ' Middle Eastern',
    image: '/images/Middleeastern.JPEG'
  },
  {
    name: 'Yalda',
    cuisine: 'Persian',
    image: '/images/persian.JPEG'
  }

  
];

export default function App() {
  return (
    <div>
      <header>
      <img src="/images/Symbol.JPEG" alt="Cultural Restaurants" />
        <h1>Cultural Restaurants In Georgia</h1>
        <p>Explore the taste of Culture</p>
      </header>
      <main className="grid">
        {restaurants.map((r, i) => (
          <CulturalRestaurantCard key={i} {...r} />
        ))}
      </main>
    </div>
  );
}
