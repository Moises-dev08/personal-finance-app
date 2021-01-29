import Home from "./components/home";
import Header from "./components/header";
import RecordsForm from "./components/recordsForm";
import UpdateRecord from "./components/updateRecord";
import RecordsList from "./components/recordsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/updateRecord/:id:type" exact component={UpdateRecord}>
            <Header />
            <UpdateRecord />
          </Route>
          <Route path="/recordsForm">
            <Header />
            <RecordsForm />
          </Route>
          <Route path="/recordsList">
            <Header />
            <RecordsList />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
