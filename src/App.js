import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import ProjectsGalery from './components/ProjectsGalery/ProjectsGalery';
import NavBar from './components/HomePage/NavBar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/projects" component={ProjectsGalery}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
