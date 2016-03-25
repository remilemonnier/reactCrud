import React from 'react';
import ReactDom from 'react-dom';
import User from './user.jsx';
import {Link} from 'react-router';

var UserList = React.createClass({
    render: function() {
        var users = this.props.users.map(function(p){
            return <User username={p.username} email={p.email} phone={p.phone} picture={p.picture} id={p.id} key={p.id}/>
        });
        return (
            <div>
                <h1>User list</h1>
                <button type="button" className="btn btn-sm btn-success" onClick={this.loadFixture}>Load</button>&nbsp;
                <Link to="/user/add" className="btn btn-sm btn-success">Add</Link>&nbsp;

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


module.exports = UserList;

/*ReactDom.render(
    <UserList source="https://randomuser.me/api/?results=5" />,
document.getElementById('container')
);*/