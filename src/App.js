import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//imported components
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';
import ContactMe from './pages/ContactMe';
import { MyWork } from './components/MyWork';

//Scroll top


//Router
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  // const location = useLocation();
  return (
    <div className="App">

      <GlobalStyle />

      <Nav />
      <AnimatePresence
        exitBeforeEnter

      >
        <Routes
        // location={location} key={location.pathname}
        >
          <Route path="/" exact element={<AboutMe />} />
          <Route path="/work" exact element={<MyWork />} />
          <Route path="/contact" element={<ContactMe />} />

        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
