import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import  Navbar from './components/Navbar';
import ExercisesList  from './components/ExercisesList';
import EditExercise from './components/EditExercise';


function App() {
  return (
    <Router>
    <div className="container">
    <Navbar/>
    <br/>
    <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} />
    </div>
  </Router>
  );
}

export default App;
