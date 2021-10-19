import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	render() {
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
				<Route path="/" exact component={Posts} />
				<Route path="/new-post" component={NewPost} />
			</div>
		);
	}
}

export default Blog;
