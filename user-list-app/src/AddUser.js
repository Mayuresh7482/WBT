import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    username: '',
    gender: '',
    dob: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({ username: '', gender: '', dob: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={this.state.gender}
          onChange={this.handleChange}
        />
        <input
          type="date"
          name="dob"
          value={this.state.dob}
          onChange={this.handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    );
  }
}

export default AddUser;