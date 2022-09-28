// @ts-nocheck
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <GlobalStyle />
      <Footer />
    </Router>
  );
}

export default App;
