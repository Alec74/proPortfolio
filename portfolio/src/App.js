import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

import Home from './pages/Home';
import About from './pages/About';
import Develop from './pages/Develop';
import Contact from './pages/Contact';

import NavbarComponent from './components/Navbar'

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });


// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });


function App() {
  return (
    <BrowserRouter basename="/proPortfolio">
      <Router>
        <>
          <NavbarComponent />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/develop' component={Develop} />
            <Route exact path='/contact' component={Contact} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </BrowserRouter>
  );
}

export default App;