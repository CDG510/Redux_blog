import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { createPost} from '../actions/index';
import {Link} from 'react-router'
//redux form takes over the page, handles the form,

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
//new component of PropTypes class
//action creator that makes a promise as payload
    onSubmit(props) {
        this.props.createPost(props)
            .then( () => {
                //blog post was created, go back to index, call this.context.router.push w/new path
                this.context.router.push('/');
            })
    }

    render() {

        const {fields: {title, categories, content}, handleSubmit} = this.props;
        // const title= this.props.fields.title
        // console.log(title)

//handleSubmit needs an action creator before it goes through
///destructures object, passes into input, all properties go into object
// {titled.touched ? title.error : ''} <= ternary string. if x is true, show tihs, else return that

//context ~~props, parent to child
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}` }>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}` }>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}` }>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-warning">Submit</button>
                <Link to= '/' className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}
//connect first agrument is mapstatetoprops, 2nd is mapDispatchToProps,
//redux: 1st is form config, 2nd is mapstatetoprops, 3 is mapDispatchToProps
function validate(values){
    const errors = {};

    if (!values.title) {
        errors.title="Enter a username";
    }
    if (!values.categories) {
        errors.categories="Enter a category";
    }
    if (!values.content) {
        errors.content="Enter some content";
    }

    return errors;
}

export default reduxForm({
    //key to track
    form: "PostsNew",
    //inputs to keep track of
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost}) (PostsNew);
