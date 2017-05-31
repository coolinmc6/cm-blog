import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class PostsIndex extends Component {
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<h4>
						<Link to={`/cm-blog/posts/${post.id}`} className="post-title">
						{post.title}
						</Link>
					</h4>
					<div className="post-text">{post.content.substring(0,250)}...</div>
				</li>
			)
		})
	}
	render() {
		return (
			<div className="main index">
				<div className="welcome"></div>
				<div className="welcome-text">
					Colin's React Blog
				</div>
				<div className="container">
					{this.renderPosts()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { 
		posts: state.posts
	}
}

export default connect(mapStateToProps)(PostsIndex);