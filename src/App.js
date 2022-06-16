import './App.css';
import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

function App() {
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const disableLoading = () => {
    setLoading(false);
  }

  const enableLoading = () => {
    setLoading(true);
  }

  const validateUsername = (e) => {
    setUsername(e.target.value);
    invoke('validate_username', { userName: e.target.value }).then((result)=>{
      if (!result) {
        alert("The username is not in the system!");
        setShowWarning(true);
        disableLoading();
      } else {
        setShowWarning(false);
        disableLoading();
      }
    });
  }

  const validatePassword = (e) => {
    setPassword(e.target.value);
    invoke('validate_password', { userName: username, userPassword: e.target.value }).then((result)=>{
      if (!result) {
        alert("The password is incorrect!");
        disableLoading();
        setShowWarning(true);
      } else {
        disableLoading();
        setShowWarning(false);
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>How not to Login</h1>
      </header>
      <main>
        {loading ? <div>Loading...</div> : 
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => {enableLoading(); validateUsername(e)}}/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => {enableLoading(); validatePassword(e)}}/>
            {showWarning && <p className='warning'>Invalid username or password</p>}
            <button type="submit">Login</button>
          </form>
       }
        
      </main>
    </div>
  );
}

export default App;
