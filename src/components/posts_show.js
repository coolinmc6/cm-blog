import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { findByID } from '../Helpers';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id)
	}

	deleteClick(id) {
		this.props.deletePost(id);
		this.props.history.push('/');
	}

	render() {
		return (
			<div className="container">
				{ this.props.posts.map((post) => {
					if(post.id == this.props.match.params.id) {
						return (
							<div key={post.id}>
								<h2>{post.title}</h2>
								<h4>Tag: {post.tag}</h4>
								<p>{post.content}</p>
								<button className="btn btn-danger" onClick={() => this.deleteClick(post.id)}>Delete</button>
							</div>
						)	
					} else {
						return '';
					}
					
				})}
				
			</div>
				
		)
	}
}

function mapStateToProps(state, ownProps) {
	// console.log(ownProps)
	return {
		posts: state.posts
	}
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);



















