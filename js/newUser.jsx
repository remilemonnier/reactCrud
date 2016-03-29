import React from 'react';
import ReactDom from 'react-dom';
import User from './user.jsx';
import UserList from './userList.jsx';
import {Router, Route, IndexRoute, Link} from 'react-router';

var newUser = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    createUser(event) {
        event.preventDefault()
        var usersJson = localStorage.getItem('users');
        var users = JSON.parse(usersJson);

        const { id } = this.props.params;

        if (parseInt(id) > 0) {
            var users = users.filter(function(user){
                return (user.id != id);
            });
        }

        var user = {
                    id: Math.floor(Math.random()*1000000),
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
        this.context.router.push('/');
    },

    getInitialState: function(){
        const { id } = this.props.params;
        var user = User.getUser(id);
        return {
            username: user.username,
            email: user.email,
            password: user.password,
            phone: user.phone,
        };
    },
    onChange(e){
        this.setState({value:event.target.value});
    },

    render() {
        const { id } = this.props.params;

        return (
            <form onSubmit={this.createUser}>
                <h1>Add/Edit an user</h1>
                <p>
                    <label for="username">Username</label><input type="text" ref="username" id="username" placeholder="Username" value={this.state.username} onChange={this.onChange}/>
                    <label for="email">Email</label><input type="email" ref="email" id="email" placeholder="email" value={this.state.email} onChange={this.onChange}/>
                    <label for="password">Password</label><input type="password" ref="password" id="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                    <label for="phone">Phone</label><input type="text" ref="phone" id="phone" placeholder="phone" value={this.state.phone} onChange={this.onChange} />
                </p>
                <p>
                    <button type="submit" className="btn btn-sm btn-success">Save</button>
                    <Link to="/" className="btn btn-sm btn-primary">Cancel</Link>
                </p>
            </form>
        )
    }
});


module.exports = newUser;