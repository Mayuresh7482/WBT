import React, { Component } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';

class App extends Component {
  state = {
    users: [],
  };

  addUser = (user) => {
    this.setState((prevState) => ({ users: [...prevState.users, user] }));
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