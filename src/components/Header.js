import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div >
							<ul className="nav navbar-nav">
								<li role="presentation"><NavLink to="/" activeClassName="selected">Home</NavLink></li>
								<li role="presentation"><NavLink to="/posts/new" activeClassName="selected">Add Post</NavLink></li>					
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li role="presentation"><NavLink to="/" activeClassName="selected">About</NavLink></li>
												
							</ul>
						</div>
					</div>

				</nav>

			</div>
		)
	}
}

export default Header;
