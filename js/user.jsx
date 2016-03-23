import React from 'react';
import ReactDom from 'react-dom';

var User = React.createClass({
    render() {
        return
            <tr>
                <td ><img src={this.props.picture.thumbnail} height="40" width="40"/></td>
                <td >{this.props.username}</td>
                <td >{this.props.email}</td>
                <td >{this.props.phone}</td>
                <td >
                    <button type="button" className="btn btn-sm btn-primary" >Edit</button>
                </td>
            </tr>
            ;
    }
});


