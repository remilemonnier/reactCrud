import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, Link, useRouterHistory} from 'react-router';
import UserList from './userList.jsx';
import User from './user.jsx';
import newUser from './newUser.jsx';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({queryKey:false})

var Home = React.createClass({
    render: function() {
        return (<div><h1>LLS</h1>
            <div id="hp">
                <UserList/>
            </div>
            {this.props.children}
        </div>);
    }
});

ReactDom.render((
    <Router history={appHistory}>
        <Route path="/" component={Home}/>
        <Route path="/user/add" component={newUser}/>
    </Router>
),
document.getElementById('container'));

/*ReactDom.render(
    <Home />,
document.getElementById('container')
);*/
