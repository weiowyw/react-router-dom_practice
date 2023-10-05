import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import Users from "./components/Users";
import PNF from "./components/PNF"
import User from "./components/User";

function App() {
  return (
    <div>

        <nav>
            <NavLink to='/'>Home Page</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/users'>Users</NavLink>

        </nav>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/posts' element={<Posts  />}/>
        <Route path='/users/:userId' element={<User />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='*' element={<PNF />}/>
      </Routes>


    </div>
  );
}

export default App;
