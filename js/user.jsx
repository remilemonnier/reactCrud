import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';

var User = React.createClass({
    statics: {
        getUser: function (id) {
            var usersJson = localStorage.getItem('users');
            var users = JSON.parse(usersJson);
            var currentUser = users.filter(function(user){
                return (id == user.id);
            });
            return (currentUser.length > 0 ? currentUser[0] : null);
        }
    },
    render: function() {
        const { id } = this.props;

        return (
            <tr key={this.props.key}>
                <td ><img src={this.props.picture.thumbnail} height="40" width="40"/></td>
                <td >{this.props.username} - {id}</td>
                <td >{this.props.email}</td>
                <td >{this.props.phone}</td>
                <td >
                    <Link to="/user/edit/" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to={`/user/delete/${this.props.id}`} className="btn btn-sm btn-danger">Delete</Link>
                </td>
            </tr>)
            ;
    }
});

module.exports = User;
