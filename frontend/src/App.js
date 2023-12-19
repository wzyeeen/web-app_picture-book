import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import ChooseStyle from "./components/Create/ChooseStyle";
import Footer from "./components/Footer";
import Story from "./components/Story/Story";
import Library from "./components/Library/Library";
import MyStory from "./components/MyStory/MyStory";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import ThreeLittlePigs from "./components/Library/Mock_story/ThreeLittlePigs/ThreeLittlePigs";
import Corgi from "./components/MyStory/Mock_story/ThreeLittlePigs/Corgi";
import ViewMyStory from "./components/MyStory/ViewMyStory";
import ViewStory from "./components/Library/ViewStory";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChooseStyle" element={<ChooseStyle />} />
          <Route path="/library" element={<Library />} />
          <Route path="/viewstory/:bookID" element={<ViewStory />} />
          <Route path="/mystory" element={<MyStory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/story" element={<Story />} />
          <Route path="/corgi" element={<Corgi />} />
          <Route path="/littlethreepigs" element={<ThreeLittlePigs />} />
          <Route path="/ViewMyStory/:bookId" element={<ViewMyStory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
