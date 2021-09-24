import React, { Children, Component } from 'react';
import axios from 'axios';
import './Blog.css';

class Blog extends Component {
	state = {
		posts: [],
		selectedId: null,
		error: false,
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
				this.setState({ error: true });
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

		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<a href="/">HOME</a>
							</li>
							<li>
								<a href="/new-posts">
									New Posts
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<section className="Posts">{posts}</section>
			</div>
		);
	}
}

export default Blog;
