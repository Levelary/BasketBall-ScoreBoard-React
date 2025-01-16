import {Link} from 'react-router-dom';
import styles from './Login.module.css';


function App() {
  const displayNone = {display: 'none'};
  return (
    <div className={styles.App}>
      <h2 className='title'>BB-Score</h2>
      
        <form className={styles.form}>
            <input type="email" className={styles.email} placeholder="Email"/>
            <input type="password" className={styles.password} placeholder="Password"/>
            <Link to='/' className={styles.submitBtn}>Login</Link>
        </form>
        <p>Do not have an account? <Link to='/signup'>Signup</Link> {/*<a href="../signup/signup.html">Create one</a>*/} </p>
        <div className={styles.errorBlock}>
            <div className={styles.missingMsg} style={displayNone}></div>
            <div className={styles.invalclassNameMsg} style={displayNone}>InvalclassName Credentials</div>
        </div>
    </div>
  );
}

export default App;
