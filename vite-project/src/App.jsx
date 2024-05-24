import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from './AddUser'; // Make sure to import AddUser component

/* function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
} */

function AddUser() {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, gender, dob }); // Replace with API call
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option defaultValue="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;

function UserList() {
  // Mock user data
  const users = [
    { id: 1, username: 'John Doe', gender: 'Male', dob: '1990-01-01' },
    { id: 2, username: 'Jane Smith', gender: 'Female', dob: '1985-06-15' },
  ];

  return (
    <div className="container mt-5">
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Gender</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.gender}</td>
              <td>{user.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

