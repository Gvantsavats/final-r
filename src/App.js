import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import MovieList from './pages/MovieList';
import Favorites from './pages/Favorites';
import './main.css';
import MoviesDetail from './pages/MoviesDetail';
import AddMovie from './pages/AddMovie';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/favorites" element={<Favorites />} />
           <Route path="/movies/:id" element={<MoviesDetail />} />
              <Route path="/add" element={<AddMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
