// @ts-nocheck
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Header title="CCH NFTs APP" />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <h4>Welcome to the world of NFTs</h4>
              <br></br>
              <h4>This app is Powered by Settlemint</h4>
            </>
          )}
        />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
