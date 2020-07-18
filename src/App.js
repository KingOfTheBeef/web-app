import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Menu from './components/Menu';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme'
import bakerImg from "./images/background.png";

function App() {
	  return (
	  	<div>
			<ThemeProvider theme={theme}>
			  <BrowserRouter>
				  <div>
					  <Navigation />
					  <Switch>
						  <Route path="/" component={Home} exact/>
						  <Route path="/about" component={About}/>
						  <Route path="/contact" component={Contact}/>
						  <Route path="/Menu" component={Menu}/>
						  <Route component={Error}/>
					  </Switch>
				  </div>
			  </BrowserRouter>
			</ThemeProvider>
			<div className="my-container">
				<img src={bakerImg}/>
			</div>
		</div>
	  );
}

export default App;
