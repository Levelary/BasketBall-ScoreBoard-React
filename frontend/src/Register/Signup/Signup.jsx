import {Link} from 'react-router-dom';
import styles from './Signup.module.css';

function App() {

  const displayNone = {display: 'none'};
  return (
    <div className={styles.App}>   
       <h2>BB-Score</h2>
       <form className={styles.form}>
            <input type="text" className={styles.username} placeholder="Username"/>
            <input type="email" className={styles.email} placeholder="Email"/>
            <input type="password" className={styles.password} placeholder="Password"/>
            <input type="password" className={styles.password2} placeholder="Re-enter Password"/>
            <Link to='/' className={styles.submitBtn}>Signup</Link>
        </form>
        <p>Have an account? <Link to='/login'>Login</Link> {/*<a href="../login/login.html">Login</a>*/}</p>

        <div className={styles.errorBlock}>
            <div className={styles.missingMsg} style={displayNone}></div>
            <div className={styles.invalidMsg} style={displayNone}>Invalid Credentials</div>
        </div> 
    </div>
  );
}

export default App;
