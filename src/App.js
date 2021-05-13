import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DialoguePage from "./pages/DialoguePage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dialogue/:id" component={DialoguePage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
