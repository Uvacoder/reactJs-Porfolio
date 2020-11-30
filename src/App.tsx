import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/work" component={OurWork} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
      <GlobalStyle />
    </div>
  );
};

export default App;
