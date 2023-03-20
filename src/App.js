import './App.css';
import Login_page from './page/Login.js';
import Home_page from './page/Home.js';
import Registered_page from './page/Registered.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Block_DetailStd from './components/Block_DetailStd';
import Block_subject from './components/Block_Subject';

//import Student from './Student.js' 

function App(){

  return(
    <div>
      
      <Home_page />
    </div>

  );
export default App;