import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DialoguePage from "./views/DialoguePage.js";
import HomePage from "./views/Home.js";
import TermsOfServicePage from "./views/TermsOfService.js";
import PrivacyPolicyPage from "./views/PrivacyPolicy.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route
          path="/terms-of-service"
          exact
          component={TermsOfServicePage}
        ></Route>
        <Route
          path="/privacy-policy"
          exact
          component={PrivacyPolicyPage}
        ></Route>
        {/* TODO Remove after next android release  */}
        <Route path="/:id/:index" exact component={DialoguePage}></Route>
        <Route path="/dialogue/:id/:index" component={DialoguePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
