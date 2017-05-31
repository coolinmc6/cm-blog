import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Header from './components/Header';
import About from './components/About';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);





ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div className="main">
			<Route path="/" component={Header} />
			
				
				<Switch>
					<Route path="/cm-blog/posts/new" component={PostsNew}/>
					<Route path="/cm-blog/posts/:id" component={PostsShow}/>
					<Route exact path="/cm-blog" component={PostsIndex}/>
					<Route path="/cm-blog/about" component={About}/>
				</Switch>
			
			</div>
			
		</BrowserRouter> 
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
