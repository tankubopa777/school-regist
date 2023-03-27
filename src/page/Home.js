import Block_subject from '../components/Block_Subject';
import Navbar_component from '../components/Navbar';
import { redirect, useNavigate, useHistory } from 'react-router-dom';

function Home_page(props) {
    
    return (
        <div>
            <Navbar_component
                user={props.user} updateUser={props.updateUser}
                isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn}/>
            <Block_subject/>
        </div>
    )
  }
    export default Home_page;