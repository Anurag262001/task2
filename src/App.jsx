// src/App.js
import React, { useState } from 'react';
import './App.css';  // Add this import
import UserForm from './components/Userform';
import UserTable from './components/UserTable';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <h1>User Information Form</h1>
      <UserForm addUser={addUser} />
      <UserTable users={users} />
    </div>
  );
}

export default App;

