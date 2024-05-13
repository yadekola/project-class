import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Browes from './Browes';
import List from './List'
import Listhome from './Listhome'
import { Link } from "react-router-dom"
import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={}></Route>
        <Route path="/signin" element={<signin} />
        <Navbar />
        <Home />
        <Browes />
        <List />
        <Listhome />
      </Routes>
    </div>
  );
}

export default App;
