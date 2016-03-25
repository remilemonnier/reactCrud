import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';

var User = React.createClass({
    render: function() {
    console.log(this.props);
        const {userID} = this.props.id;
        return (
            <tr key={this.props.key}>
                <td ><img src={this.props.picture.thumbnail} height="40" width="40"/></td>
                <td >{this.props.username}</td>
                <td >{this.props.email}</td>
                <td >{this.props.phone}</td>
                <td >
                    <Link to="/user/edit/" className="btn btn-sm btn-primary">Edit</Link>
                </td>
            </tr>)
            ;
    }
});

module.exports = User;
