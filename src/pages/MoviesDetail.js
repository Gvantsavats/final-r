import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MoviesDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('გთხოვთ შეხვიდეთ სისტემაში');
      setLoading(false);
      return;
    }

    axios.get(`https://warrior.ge/api/movies/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setMovie(res.data.data))
      .catch(() => setError('ფილმი ვერ მოიძებნა'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h2>title {movie.title}</h2>
      <p> Description {movie.description}</p>
      <p> Year: {movie.year}</p>
    </div>
  );
}

export default MoviesDetail;