import React from 'react';
import Home from './components/home';
import Header from './components/Header';
import Footer from './components/Footer';

import Sprints from './components/Sprints';
import {
	BrowserRouter,
	Route,
  Switch
} from 'react-router-dom';

const App = (props) => {
	return (<BrowserRouter>
		<div className="App">
    <Header/>
			<Switch>
			<Route  path="/Home" render={() => <Home/>}/>

			<Route  path="/Sprints" render={() => <Sprints/>}/>
				<Route component={Home}/>
			</Switch>
      <Footer/>

		</div>
	</BrowserRouter>)
}

export default App;
