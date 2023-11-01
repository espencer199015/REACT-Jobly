import React, { useState } from 'react';
import JoblyApi from '../api';

function SignupForm() {
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await JoblyApi.signup(formData);
      // Handle successful signup, e.g., show a success message or redirect to login
    } catch (error) {
      // Handle signup error, e.g., display error message
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;