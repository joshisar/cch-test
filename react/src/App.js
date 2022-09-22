// @ts-nocheck
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <GlobalStyle />
      <Inner />
      <Footer />
    </Router>
  );
}

function Inner() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <Home />}
      {location.pathname === '/privacy' && <Privacy />}
      {location.pathname === '/terms' && <Terms />}
    </>
  );
}

export default App;
