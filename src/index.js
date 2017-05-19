import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import { BrowserRouter, Route } from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import Header from './components/Header';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);





ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				
				<div className="container">
					<Route path="/" component={Header} />	
					<Route exact path="/" component={PostsIndex}/>
					<Route path="/posts/new" component={PostsNew}/>
				</div>
			</div>
		</BrowserRouter> 
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
