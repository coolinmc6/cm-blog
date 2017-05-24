import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<ul className="nav nav-tabs">
					<li role="presentation"><Link to="/">Home</Link></li>
					<li role="presentation"><Link to="/posts/new">Add Post</Link></li>
				</ul>
			</div>
		)
	}
}

export default Header;
