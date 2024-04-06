import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layouts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout children={undefined}></Layout>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
