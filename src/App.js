import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//imported components
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';

//Router
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/" exact element={<AboutMe />} />
        <Route path="/work" exact element={<MyWork />} />
        <Route path="/contact" exact element={<ContactMe />} />
      </Routes>

    </div>
  );
}

export default App;
