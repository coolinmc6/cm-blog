import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<ul className="nav nav-pills">
					<li role="presentation"><Link to="/">Home</Link></li>
					<li role="presentation"><Link to="/posts/new">Add Post</Link></li>
				</ul>
			</div>
		)
	}
}

export default Header;
