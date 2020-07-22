import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import Product from './components/Product';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme'
import Custom from "./components/Custom";

function App() {
	  return (
	  	<div>
			<div className="my-container">
			</div>
			<ThemeProvider theme={theme}>
			  <BrowserRouter>
				  <div>
					  <Navigation />
					  <Switch>
						  <Route path="/" component={Home} exact/>
						  <Route path="/about" component={About}/>
						  <Route path="/contact" component={Contact}/>
						  <Route path="/menu" component={Menu}/>
						  <Route path="/custom" component={Custom}/>
						  <Route path={'/products/:product_name'} exact component={Product} />
						  <Route component={Error}/>
					  </Switch>
				  </div>
			  </BrowserRouter>
			</ThemeProvider>
		</div>
	  );
}

export default App;
