import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsIndex extends Component {
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
				{post.text}
				</li>
			)
		})
	}
	render() {
		return (
			<div>
				POSTS INDEX
				{this.renderPosts()}
				<button onClick={() => this.props.history.push('/posts/new')}>New Post</button>
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