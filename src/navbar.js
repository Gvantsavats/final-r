import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>მთავარი გვერდი</h2>
      <Link to="/register">რეგისტრაცია</Link> |{' '}
      <Link to="/login">ავტორიზაცია</Link> |{' '}
      <Link to="/movies">ფილმები</Link> |{' '}
      <Link to="/favorites">რჩეულები</Link>|{' '}
       <Link to="/addMovie">ფილმის დამატება</Link>|{' '}
    </nav>
  );
}

export default Navbar;