import React from 'react';
import ReactDom from 'react-dom';
import User from './user.jsx';
import UserList from './userList.jsx';
import {Router, Route, IndexRoute, Link} from 'react-router';

var newUser = React.createClass({
  createUser(event) {
console.log(this);
    event.preventDefault()
        var users = this.state.users;

        user= {
                    username: ReactDom.findDOMNode(this.refs.username).value,
                    email: ReactDom.findDOMNode(this.refs.email).value
                  };

        users.push(user);
        this.setState({users: users});




        /*
    UserList.addUser({
      username: ReactDom.findDOMNode(this.refs.username).value,
      email: ReactDom.findDOMNode(this.refs.email).value
    });*/
    window.location = '/';
  },

  render() {
    return (
      <form onSubmit={this.createUser}>
        <p>
          <input type="text" ref="username" placeholder="Username" />
          <input type="text" ref="email" placeholder="email" />
        </p>
        <p>
          <button type="submit">Save</button> <Link to="/">Cancel</Link>
        </p>
      </form>
    )
  }
});


module.exports = newUser;