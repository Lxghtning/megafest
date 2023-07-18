import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contact from './Components/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/contact" element = {<Contact/>}/>
        </Routes>
        </BrowserRouter>

        </>
    </>
  );
}

export default App;
