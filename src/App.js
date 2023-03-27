import './App.css';
import Login_page from './page/Login.js';
import Home_page from './page/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ajarn_Page from './page/Ajarn.js';
import TableStd from './components/TableStd';
import Card_Edit from './components/Card_Edit';

function App(){

  return(
    <div>
      <Ajarn_Page />
    </div>

  );
}
export default App;