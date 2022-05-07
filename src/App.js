import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//imported components
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';
import MovieDetail from './pages/MovieDetail';
//Scroll top


//Router
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">

      <GlobalStyle />

      <Nav />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes
          location={location} key={location.pathname}
        >
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
