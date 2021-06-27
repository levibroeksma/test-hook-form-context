import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Afspraak from "./pages/Afspraak";
import Login from "./pages/Login";
import AddRecipe from "./pages/add-recipe";
import Step1 from "./components/step1";
import AddRecipeProvider from "./context/AddRecipeProvider";

function App() {
  return (
      <AddRecipeProvider>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/add-recipe">Add recipe</Link>
                </li>
                <li>
                  <Link to="/afspraak-maken">Prik een datum</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/wat">Wat</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/afspraak-maken">
              <Afspraak />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/wat">
              <Step1 />
            </Route>
            <Route path="/add-recipe">
              <AddRecipe />
            </Route>
          </Switch>
        </div>
      </AddRecipeProvider>
  );
}

export default App;