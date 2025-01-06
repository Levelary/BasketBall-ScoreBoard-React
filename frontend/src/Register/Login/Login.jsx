import {Link} from 'react-router-dom';
import './Login.css';


function App() {
  const displayNone = {display: 'none'};
  return (
    <div className="App">
      <h2>BB-Score</h2>
      
        <form>
            <input type="text" id="username" placeholder="* Username"/>
            <input type="email" id="email" placeholder="* Email"/>
            <input type="password" id="password" placeholder="* Password"/>
            <button id="submitBtn">Login</button>
        </form>
        <p>Do not have an account? <Link to='/signup'>Signup</Link> {/*<a href="../signup/signup.html">Create one</a>*/} </p>
        <div id="errorBlock">
            <div id="missingMsg" style={displayNone}></div>
            <div id="invalidMsg" style={displayNone}>Invalid Credentials</div>
        </div>
    </div>
  );
}

export default App;
