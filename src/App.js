import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DialoguePage from './views/DialoguePage.js';
import HomePage from './views/Home.js';
import TermsOfServicePage from './views/TermsOfService.js';
import PrivacyPolicyPage from './views/PrivacyPolicy.js';

function App() {
  return (
    <Router>
      <div className="h-100">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/terms-of-service" exact component={TermsOfServicePage}></Route>
          <Route path="/privacy-policy" exact component={PrivacyPolicyPage}></Route>
          <Route path="/dialogue/:id" component={DialoguePage}></Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
