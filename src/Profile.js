import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';

function Profile() {
  const [userData, setUserData] = useState({ username: '', password: '', email: '' });

  useEffect(() => {
    async function fetchUserData() {
      const response = await JoblyApi.getUserData(); // Replace with your API call
      setUserData(response);
    }
    fetchUserData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await JoblyApi.updateUserData(userData); // Replace with your API call
      // Handle successful update, e.g., show a success message or redirect
    } catch (error) {
      // Handle update error, e.g., display error message
    }
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
        <label>Password</label>
        <input type="password" name="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
        <label>Email</label>
        <input type="email" name="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;