import React from 'react'

import Comment from './Comment'

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                { text: '' }
            ],
            newCommentText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    text: this.state.newCommentText
                }
            ]
        });
        e.preventDefault();
    }

    handleTextChange(e) {
        this.setState({ newCommentText: e.target.value })
    }

    render() {
        return (
            <div class="container">
                <h3>"{this.props.title}"</h3>
                <h5>Add new comments</h5>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <textarea
                            value={this.newCommentText}
                            onChange={this.handleTextChange}
                            class="form-control status-box"
                            rows="3"
                            placeholder="Enter your comment here...">
                        </textarea>
                    </div>
                    <div class="button-group pull-right">
                        <button
                            class="btn btn-primary"
                            type="submit">Post</button>
                    </div>
                </form>
                {this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text} />
                })}
            </div>
        );
    }
}