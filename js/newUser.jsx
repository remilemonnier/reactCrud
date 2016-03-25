import React from 'react';
import ReactDom from 'react-dom';
import User from './user.jsx';
import UserList from './userList.jsx';
import {Router, Route, IndexRoute, Link} from 'react-router';

var newUser = React.createClass({
  createUser(event) {
        event.preventDefault()
        var usersJson = localStorage.getItem('users');
        var users = JSON.parse(usersJson);
        var user = {
                    id: Math.floor(Math.random()*11),
                    username: ReactDom.findDOMNode(this.refs.username).value,
                    email: ReactDom.findDOMNode(this.refs.email).value,
                    password: ReactDom.findDOMNode(this.refs.password).value,
                    phone: ReactDom.findDOMNode(this.refs.phone).value,
                    picture: {
                        large: null,
                        medium: null,
                        thumbnail: null
                    },
                  };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        //window.location = '#/';
  },

  render() {
    return (
      <form onSubmit={this.createUser}>
      <h1>Add an user</h1>
        <p>
          <label for="username">Username</label><input type="text" ref="username" id="username" placeholder="Username" />
          <label for="email">Email</label><input type="email" ref="email" id="email" placeholder="email" />
          <label for="password">Password</label><input type="password" ref="password" id="password" placeholder="password" />
          <label for="phone">Phone</label><input type="text" ref="phone" id="phone" placeholder="phone" />
        </p>
        <p>
          <button type="submit">Save</button> <Link to="/">Cancel</Link>
        </p>
      </form>
    )
  }
});


module.exports = newUser;