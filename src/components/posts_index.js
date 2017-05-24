import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<h4>
						<Link to={`/posts/${post.id}`}>
						{post.title}
						</Link>
					</h4>
					<div>{post.content.substring(0,169)}...</div>
				</li>
			)
		})
	}
	render() {
		return (
			<div>
				{this.renderPosts()}
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