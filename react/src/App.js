// @ts-nocheck
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Header title="Claim NFTs" />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <h4>Welcome to CCH-NFTs</h4>
            </>
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
