import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Navbar";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Nav />
      <Home />
      <Footer />
    </>
  );
}
