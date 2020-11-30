import React from 'react';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      <GlobalStyle />
    </div>
  );
};

export default App;
