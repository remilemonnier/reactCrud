import React from 'react';
import ReactDom from 'react-dom';
import User from './user.jsx';
//import User from './module';

var UserList = React.createClass({
    getInitialState: function(){
        return {
            users: []
        };
    },
    addUser: function(){
        var users = this.state.users;
        var user = users.slice(-1)[0];
        users.push(user);
        this.setState({users: users});
    },
    loadFixture: function(){
        this.serverRequest = $.get(this.props.source, function (results) {
            var users = results.results.map(function(user){
                return {
                    username: user.user.username,
                    email: user.user.email,
                    password: user.user.password,
                    phone: user.user.phone,
                    picture: {
                        large: user.user.picture.large,
                        medium: user.user.picture.medium,
                        thumbnail: user.user.picture.thumbnail,
                    },
                };
            });

            this.setState({users: users});
        }.bind(this));
    },
    render: function() {
        var self = this;
        var users = this.state.users.map(function(p){
            return <User username={p.username} email={p.email} phone={p.phone} picture={p.picture} />
            //return <tr><td>toto</td></tr>
        });
        return (
            <div>
                <h1>User list</h1>
                <button type="button" className="btn btn-sm btn-success" onClick={this.loadFixture}>Load</button>&nbsp;
                <button type="button" className="btn btn-sm btn-success" onClick={this.addUser}>Add</button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Nom</th>
                            <th>mail</th>
                            <th>Tel</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody> {users} </tbody>
                </table>
            </div>
            );
    }
});


//module.exports = UserList;

ReactDom.render(
    <UserList source="https://randomuser.me/api/?results=5" />,
document.getElementById('container')
);