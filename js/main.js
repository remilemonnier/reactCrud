/*import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" path="/login" handler={LoginHandler}/>
    </Route>
    );*/

var User = React.createClass({
    render: function() {
        return (
            <tr>
                <td ><img src={this.props.picture.thumbnail} /></td>
                <td >{this.props.username}</td>
                <td >{this.props.email}</td>
                <td >{this.props.phone}</td>
                <td >
                    <button type="button" className="btn btn-sm btn-primary" >Edit</button>
                </td>
            </tr>
            );
    }
});

var UserList = React.createClass({
    getInitialState: function(){
        return {
            users: [],
            editingUser: {name:""}
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



ReactDOM.render(
    <UserList source="https://randomuser.me/api/?results=5" />,
document.getElementById('container')
);
