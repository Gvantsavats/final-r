import { Link } from 'react-router-dom';

function MovieCard({ movie, isFavorite }) {
  const handleAddToFavorites = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("გთხოვთ ჯერ გაიაროთ ავტორიზაცია!");
      return;
    }

    fetch(`https://warrior.ge/api/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ movie_id: movie.id }),
    })
      .then((res) => res.json())
      .then(() => alert("დაემატა ფავორიტებში!"))
      .catch(() => alert("შეცდომა ფავორიტებში დამატებისას."));
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>წელი: {movie.year}</p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to={`/movies/${movie.id}`}>
          <button>დეტალურად ნახვა</button>
        </Link>

        <button onClick={handleAddToFavorites} disabled={isFavorite}>
          {isFavorite ? <span>ფავორიტები</span> : "ფავორიტებში დამატება"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
