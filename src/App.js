import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import React,{ useState } from "react";
import Home from './components/Home';
import Alert from './components/Alert';
import Contact from './components/Contact';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import NoteState from './context/notes/NoteState';
import UserState from './context/user/UserState';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <div className="App">
      <Router>
      <NoteState showAlert={showAlert}>
      <UserState showAlert={showAlert}>
      <Navbar showAlert={showAlert}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
            <Route exact path="login" element={<Login showAlert={showAlert}/>} />
            <Route exact path="signup" element={<Signup showAlert={showAlert}/>} />
            <Route exact path="profile" element={<Profile showAlert={showAlert}/>} />
            <Route exact path="contact" element={<Contact showAlert={showAlert}/>} />
            <Route exact path="about" element={<About showAlert={showAlert}/>} />
            <Route exact path="*" element={<NotFound/>} />
        </Routes>
      </div>
      </UserState>
      </NoteState>
      </Router>
    </div>
  );
}

export default App;
