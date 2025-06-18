import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import ResultPage from "./components/ResultPage";
import { ResultProvider } from "./context/ResultContext";
import "./App.css";

function App() {
  return (
    <ResultProvider>
      <Router>
        <div className="app">
          <h1 style={{ textAlign: "center", margin: "20px 0", fontSize: "2rem" }}>
            MBTI Identifier
          </h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </div>
      </Router>
    </ResultProvider>
  );
}

export default App;
