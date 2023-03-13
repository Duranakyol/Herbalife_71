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
import ErrorPage from "./components/ErrorPage";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CssBaseline>
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
          <Footer />
        </CssBaseline>
      </Provider>
    </div>
  );
}

export default App;
