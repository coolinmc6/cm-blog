import React, { Component } from 'react';
import { connect } from 'react-redux'
import { findByID } from '../Helpers';
import { fetchPost } from '../actions';

class PostsShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id)
	}

	render() {
		return (
			<div>
				{ this.props.posts.map((post) => {
					if(post.id == this.props.match.params.id) {
						return (
							<div>{post.title}</div>
						)	
					} else {
						return (
							<div>Hello</div>
							)
					}
					
				})}
				
			</div>
				
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}
export default connect(mapStateToProps, { fetchPost })(PostsShow);



















