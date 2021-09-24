import React, { Children, Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';
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
			</div>
		);
	}
}

export default Blog;
