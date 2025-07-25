import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://warrior.ge/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('შესვლა წარმატებულია');
      navigate('/movies'); 
    } catch (err) {
      alert('შესვლა ვერ მოხერხდა 😶');
    }
  };

  return (
    <div>
      <h2>შესვლა</h2>
      <input
        type="email"
        placeholder="ელ.ფოსტა"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="პაროლი"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>შესვლა</button>
    </div>
  );
}

export default Login;