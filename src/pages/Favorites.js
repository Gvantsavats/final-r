import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('გთხოვთ შეხვიდეთ სისტემაში');
      setLoading(false);
      return;
    }

    axios.get('https://warrior.ge/api/favorites', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        const data = res.data?.data || res.data;
        setFavorites(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setError('დაფიქსირდა შეცდომა');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>იტვირთება..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>რჩეული ფილმები</h2>
      {favorites.length === 0 ? (
        <p>არჩეული ფილმები ვერ მოიძებნა</p>
      ) : (
        favorites.map(fav => (
          <MovieCard
            key={fav.id}
            movie={fav.movie || fav}
            isFavorite={true} 
          />
        ))
      )}
    </div>
  );
}

export default Favorites;