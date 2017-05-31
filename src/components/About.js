import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div className="main about">
				<h1>About</h1>
				<h2>This App</h2>
				<p>This app was built using Facebook's <a href="https://github.com/facebookincubator/create-react-app">
				Create React App</a>.  Application state is managed by <a href="http://redux.js.org/">Redux</a> in concert with 
				<a href="http://redux-form.com/">Redux Form</a> for form submission. Navigation is handled by 
				<a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a> 
				and the styling is a combination of <a href="http://getbootstrap.com/getting-started/">Bootstrap</a>
				and <a href="http://sass-lang.com/">Sass</a>.
				</p>
				<br />
				<h2>This Developer</h2>
				<p>
				This app was built by <a href="http://www.colinmc.me">Colin McNamara</a>, a Philly-based web developer.
				To learn more about me, feel free to contact me via 
				<a href="https://www.linkedin.com/in/colinpmcnamara">LinkedIn</a> or check me out on
				<a href="https://www.github.com/coolinmc6">Github</a>.

				</p>
			</div>
		)
	}
}

export default About;