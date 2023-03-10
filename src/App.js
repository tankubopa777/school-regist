import './App.css';
import Login from './Login.js';
import Student from './Student.js' 
import Student_free from './Student.js' 

function App() {
  if(true){
    return(<Login/>);
  }
  else{
    return(<Student_free/>);
  }
}

export default App;
