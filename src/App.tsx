import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import ProjectsGalery from './components/ProjectsGalery/ProjectsGalery';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/projects" component={ProjectsGalery}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
