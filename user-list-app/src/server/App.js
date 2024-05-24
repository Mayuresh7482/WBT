import React, { Component } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import API from '../utils/API';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await API.get('/users');
    this.setState({ users: response.data });
  };

  addUser = async (user) => {
    const response = await API.post('/new', user);
    this.setState((prevState) => ({ users: [...prevState.users, response.data] }));
  };

  render() {
    return (
      <div className="container">
        <h1>User List</h1>
        <AddUser addUser={this.addUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;