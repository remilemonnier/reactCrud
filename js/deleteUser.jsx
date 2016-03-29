import React from 'react';
import ReactDom from 'react-dom';
import User from './user.jsx';
import UserList from './userList.jsx';
import {Router, Route, IndexRoute, Link} from 'react-router';

var deleteUser = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    deleteUser(event) {
        const { id } = this.props.params;
        event.preventDefault()
        var usersJson = localStorage.getItem('users');
        var users = JSON.parse(usersJson);

        var newUserList = users.filter(function(user){
            return (user.id != id);
        });

        localStorage.setItem('users', JSON.stringify(newUserList));
        this.context.router.push('/');
    },

    render() {
        const { id } = this.props.params;
        var user = User.getUser(id);
        return (
            <form onSubmit={this.deleteUser}>
                <h1>Delete an user</h1>
                <p>
                    Are you sure to delete this user: <b>{user.username} - {user.id}</b>
                </p>
                <p>
                    <button type="submit" className="btn btn-sm btn-danger">Oui</button>
                    <Link to="/" className="btn btn-sm btn-primary">Non</Link>
                </p>
            </form>
        )
    }
});


module.exports = deleteUser;