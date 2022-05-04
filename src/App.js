import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//imported components
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';
import MovieDetail from './pages/MovieDetail';

//Router
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  // const location = useLocation();
  return (
    <div className="App">

      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" exact element={<AboutMe />} />
          <Route path="/work" exact element={<MyWork />} />
          <Route path="/work/:id" exact element={<MovieDetail />} />
          <Route path="/contact" exact element={<ContactMe />} />
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
