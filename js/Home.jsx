import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, Link} from 'react-router';

var Home = React.createClass({
    render: function() {
        return (<div><h1>Home</h1></div>);
    }
}

ReactDom.render((
    <Router>
        <Route path="/" component={Home}>
            <IndexRoute component={About}/>
        </Route>
    </Router>
), document.body);