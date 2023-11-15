import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/posts/SinglePost";
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

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/posts/:storyId" render={() => <SinglePost />} />
          <Route path="/posts" render={() => <Posts />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
