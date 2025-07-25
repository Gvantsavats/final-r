import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert('გთხოვთ ჯერ გაიაროთ ავტორიზაცია!');
      return;
    }

    const newMovie = { title, description, year };

    try {
      const res = await fetch('https://warrior.ge/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newMovie),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'დამატება ვერ მოხერხდა');
      }

      alert('ფილმი დაემატა წარმატებით!');
      navigate('/movies'); // Redirect to movie list after adding

    } catch (err) {
      alert(err.message || 'შეცდომა ფილმის დამატებისას.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>ფილმის დამატება</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="სათაური"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="აღწერა"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="წელი"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <button type="submit">დამატება</button>
      </form>
    </div>
  );
}

export default AddMovie;
