import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsIndex extends Component {
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
				{post.content}
				</li>
			)
		})
	}
	render() {
		return (
			<div>
				POSTS INDEX
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