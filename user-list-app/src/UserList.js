import React, { Component } from 'react';

class UserList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Gender</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.gender}</td>
              <td>{user.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserList;