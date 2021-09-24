import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';

class Posts extends Component {
	state = {
		posts: [],
	};

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				const posts = res.data.slice(0, 4);
				const updatedPosts = posts.map((post) => {
					return {
						...post,
						author: 'Maxim',
					};
				});
				this.setState({ posts: updatedPosts });
			})
			.catch((err) => {
				console.log(err);
				// this.setState({ error: true });
			});
	}

	postSelectedHandler = (id) => {
		this.setState({ selectedId: id });
	};
	render() {
		let posts = (
			<p style={{ textAlign: 'center' }}>Something went Wrong</p>
		);

		if (!this.state.error) {
			posts = this.state.posts.map((post) => {
				return (
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						clicked={() => {
							this.postSelectedHandler(post.id);
						}}
					/>
				);
			});
		}
		return <section className="Posts">{posts}</section>;
	}
}

export default Posts;
