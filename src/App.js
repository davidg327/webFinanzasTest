import './App.css';
import {Provider} from "react-redux";
import store from "./state/store";
import Home from "./views/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Users from "./views/users";
import Expenses from "./views/expenses";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/expenses" element={<Expenses />} />
              </Routes>
          </Router>
      </Provider>
  );
}

export default App;
