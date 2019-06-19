/* Modules */
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props.posts);
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    console.log(field.meta);

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title"
          placeholder="Enter text here"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          placeholder="Enter text here"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post Content"
          placeholder="Enter text here"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  console.log("My values", values);

  /* Validate the inputs from 'values' */
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }

  /* If errors is empty, the form is fine to submit */
  /* If has *any* properties, redux assumes form is invalid */
  return errors;
}

/* State */
const mapStateToProps = state => ({
  posts: state.posts
});

PostsNew = reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);

export default connect(
  mapStateToProps,
  { createPost }
)(PostsNew);
