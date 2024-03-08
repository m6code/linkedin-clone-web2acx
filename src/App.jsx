import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.jsx";
import {HomePage} from "./pages/HomePage.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
