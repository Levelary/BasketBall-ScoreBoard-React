import {Link} from 'react-router-dom';
import styles from './Signup.module.css';

function App() {

  const displayNone = {display: 'none'};
  return (
    <div className={styles.App}>   
       <h2>BB-Score</h2>
       <form>
            <input type="text" id="username" placeholder="* Username"/>
            <input type="email" id="email" placeholder="* Email"/>
            <input type="password" id="password" placeholder="* Password"/>
            <input type="password" id="password2" placeholder="* Re-enter Password"/>
            <button id="submitBtn"><Link to='/'>Signup</Link></button>
        </form>
        <p>Have an account? <Link to='/login'>Login</Link> {/*<a href="../login/login.html">Login</a>*/}</p>

        <div id="errorBlock">
            <div id="missingMsg" style={displayNone}></div>
            <div id="invalidMsg" style={displayNone}>Invalid Credentials</div>
        </div> 
    </div>
  );
}

export default App;
