import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, Link, useRouterHistory} from 'react-router';
import UserList from './userList.jsx';
import User from './user.jsx';
import newUser from './newUser.jsx';
import deleteUser from './deleteUser.jsx';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({queryKey:false})

var Home = React.createClass({
    getInitialState: function(){
        return {
            users: []
        };
    },
    componentDidMount: function() {
        var usersJson = localStorage.getItem('users');
        if (usersJson) {
            var users = JSON.parse(usersJson);
            this.setState({users: users});
        } else {
            var source = 'https://randomuser.me/api/?results=5';
            this.serverRequest = $.get(source, function (results) {
                var users = results.results.map(function(user){
                    return {
                        id: user.user.dob,
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
                localStorage.setItem('users', JSON.stringify(users));
            }.bind(this));
        }
    },
    render: function() {
        return (<div><h1>LLS</h1>
            <div id="hp">
                <UserList users={this.state.users}/>
            </div>
            {this.props.children}
        </div>);
    }
});

ReactDom.render((
    <Router history={appHistory}>
        <Route path="/" component={Home}/>
        <Route path="/user/add" component={newUser}/>
        <Route path="/user/edit/:id" component={newUser}/>
        <Route path="/user/delete/:id" component={deleteUser}/>
    </Router>
),
document.getElementById('container'));

/*ReactDom.render(
    <Home />,
document.getElementById('container')
);*/
