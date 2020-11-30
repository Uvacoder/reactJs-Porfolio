import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import OurWork from './pages/OurWork';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={AboutUs} />
          <Route path="/work" component={OurWork} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </AnimatePresence>
      <GlobalStyle />
    </div>
  );
};

export default App;
