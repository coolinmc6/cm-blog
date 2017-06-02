import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { connect } from 'react-redux';
import { generateID } from '../Helpers';

class PostsNew extends Component {
	renderField(field) {
		// const { meta: { touched, error } } = field;
		// const className = `form-group ${touched && error ? 'has-danger' : ''}`

		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input 
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">{touched ? error : ''}</div>
			</div>

		)
	}
	renderTextArea(field) {
		const { meta: { touched, error } } = field;
		const className = `field form-group ${touched && error ? 'has-danger' : ''}`


		return (
			<div className={className}>
				<label>{field.label}</label>
				<textarea type="text" className="form-control" {...field.input}></textarea>
				
				<div className="text-help">{touched ? error : ''}</div>
			</div>

		)
	}
	onSubmit(values) {
		values.id = generateID();
		this.props.createPost(values)
		this.props.history.push('/cm-blog');

	}

	render() {
		// const { handleSubmit } = this.props
		const handleSubmit = this.props.handleSubmit
		return (
			<div className="container">
				<h2><i className="fa fa-pencil"></i>&nbsp;Add New Post</h2>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field 
						name="title" 
						label="Title" 
						component={this.renderField}
					/>
					<Field 
						name="tag" 
						label="Tag" 
						component={this.renderField}
					/>
					<Field 
						name="content" 
						label="Post Content" 
						component={this.renderTextArea}
					/>
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/cm-blog/" className="btn btn-danger cancel">Cancel</Link>
				</form>
			</div>
		)
	}
}

// values is an object that holds the values that the user has entered
function validate(values) {
	const errors = {};

	// validate the inputs from values
	if (!values.title) {
		errors.title = "Enter a title!"
	}
	if (!values.tag) {
		errors.tag = "Enter some a tag!"
	}
	if (!values.content) {
		errors.content = "Enter some content!"
	}

	// if errors is empty, the form is fine to submit
	// if errors has any properties, redux form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'NewPosts'
})(connect(null, { createPost } )(PostsNew));