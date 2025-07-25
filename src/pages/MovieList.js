import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; 
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('Token not found. Please log in first.');
      setLoading(false);
      return;
    }

    axios
      .get('https://warrior.ge/api/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data?.data || res.data.data;
        setMovies(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setError('Failed to load movies.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {movies.length > 0 ? (
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default MovieList;