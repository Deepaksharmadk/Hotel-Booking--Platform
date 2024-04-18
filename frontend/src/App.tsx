import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layouts";
import Register from "./pages/Register.tsx";
import Home from "./pages/Home.tsx";
import SignIn from "./pages/SignIn.tsx";
import { useAppContext } from "./context/AppContext.tsx";

import AddHotel from "./pages/Addhotal.tsx";

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <>
      <BrowserRouter>
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
          <Route
            path="/sign-in"
            element={
              <Layout>
                <SignIn />
              </Layout>
            }
          />
          {isLoggedIn && (
            <>
              <Route
                path="/add-hotel"
                element={
                  <Layout>
                    <AddHotel />
                  </Layout>
                }
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
