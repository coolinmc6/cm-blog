import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { connect } from 'react-redux';
import { generateID } from '../Helpers';

class PostsNew extends Component {
	renderField(field) {		
		return (
			<div className="field">
				<label>{field.label}</label>
				<input type="text" className="form-control" {...field.input}/>
			</div>

		)
	}
	renderTextArea(field) {
		return (
			<div className="field">
				<label>{field.label}</label>
				<textarea type="text" className="form-control" {...field.input}></textarea>
			</div>

		)
	}
	onSubmit(values) {
		values.id = generateID();
		this.props.createPost(values)
		this.props.history.push('/cm-blog/');

	}

	render() {
		// const { handleSubmit } = this.props
		const handleSubmit = this.props.handleSubmit
		return (
			<div className="container">
				<h2><i className="fa fa-pencil"></i>&nbsp;Add New Post</h2>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="title" label="Title" component={this.renderField}/>
					<Field name="tag" label="Tag" component={this.renderField}/>
					<Field name="content" label="Post Content" component={this.renderTextArea}/>
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/" className="btn btn-danger cancel">Cancel</Link>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: 'NewPosts'
})(connect(null, { createPost } )(PostsNew));