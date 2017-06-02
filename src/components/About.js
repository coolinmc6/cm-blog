import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div className="main about">
				<h1>About</h1>
				<h2>This App</h2>
				<p>
					This app was built using Facebook's <a href="https://github.com/facebookincubator/create-react-app">
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

				<br />

				<h2>React Apps</h2>
				<table>
					<tbody>
						<tr>
							<td>
								<a href="https://coolinmc6.github.io/CM-todo-react/">React ToDo List</a>
							</td>
							<td>
								React-only ToDo List<br />
								<span className="explanation">This is my first (published) React app.  You can add todo's, 
								delete them, mark them complete, and filter by complete status.  Application state
								is entirely within the primary component, TodoList. All additions, removals and updates
								of todos (i.e. marking a todo "complete") avoid mutating state.</span>
							</td>
						</tr>
						<tr>
							<td>
								<a href="https://coolinmc6.github.io/cm-todo-react2/">React ToDo List #2</a>
							</td>
							<td>
								React and Redux ToDo List<br />
								<span className="explanation">This app takes the one above to the next level by adding
								Redux.  All application state is managed by Redux and there is no "server" interaction,
								meaning that all todo's are stored locally (no GET, POST, DELETE requests).
								</span>
							</td>
						</tr>
						<tr>
							<td>
								<a href="https://coolinmc6.github.io/cm-blog">React Blog  
								<span className="app"> (this app!)</span></a>
							</td>
							<td>
								React and Redux Blog<br />
								<span className="explanation">This app builds on the React-Redux Todo app by adding a
								few more libraries: ReduxForm and React Router.  Unlike the two apps above, a blog 
								requires navigation to a separate page showing the content of that blog post.  React Router
								accomplishes that while ReduxForm simplifies the blog post submission process AND includes
								validation of user input.
								</span>
							</td>
						</tr>
					</tbody>
				</table>

			</div>
		)
	}
}

export default About;