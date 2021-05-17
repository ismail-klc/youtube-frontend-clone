import Layout from "./components/Layout";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Trendings from "./pages/Trendings";
import Subscriptions from "./pages/Subscriptions";
import Watch from "./pages/Watch";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/feed/explore" exact>
            <Trendings />
          </Route>
          <Route path="/feed/subscriptions" exact>
            <Subscriptions />
          </Route>
          <Route path="/watch" >
            <Watch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
