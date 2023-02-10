import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CssBaseline>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <Footer />
          </Router>
        </CssBaseline>
      </Provider>
    </div>
  );
}

export default App;
