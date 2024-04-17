import React, { useState } from 'react';

function LoginPage() {
  // State to store form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for input change
  const handleInputChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  };

  // Event handler for form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication or validation
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleInputChange} />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleInputChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
