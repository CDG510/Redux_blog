import React from 'react'

import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'
//app should remain default
//react router is like partials in angular
export default (
	<Route path ='/' component={App} >
		//IndexRoute is 'default' route
		<IndexRoute component={PostsIndex} />
		<Route path="/posts/new" component={PostsNew} />
		<Route path="/posts/:id" component={PostsShow} />

	</Route>
	);
