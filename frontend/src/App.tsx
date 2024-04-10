import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layouts";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
