import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('https://warrior.ge/api/register', {
        name,
        email,
        password,
      });
      alert('რეგისტრაცია წარმატებით დასრულდა!');
    } catch (err) {
      if (err.response && err.response.data) {
        alert('რეგისტრაციისას დაფიქსირდა შეცდომა: ' + JSON.stringify(err.response.data));
      } else {
        alert('რეგისტრაციისას დაფიქსირდ შეცდომა!');
      }
    }
  };

  return (
    <div>
      <h2>რეგისტრაცია</h2>
      <input
        type="text"
        placeholder="სახელი"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <input
        type="email"
        placeholder="ელ. ფოსტა"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="პაროლი"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleRegister}>რეგისტრაცია</button>
    </div>
  );
}

export default Register;