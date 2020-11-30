import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <div className="App">
      <AboutUs />
      <GlobalStyle />
    </div>
  );
};

export default App;
