import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import SinglePost from "./components/singlePost";
import Post from "./components/post";
import Project from "./components/project";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
