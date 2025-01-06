import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css';
const App = () => {
  return (
    <div>

        <Link id="loginLink" to="/login">Login</Link> {/*<button id="logout">Logout</button> */}
        <Link id="signupLink" to="/signup">Signup</Link>
        <div id="scoreBoard">
            <div id="timer">
                <div className="timeBox" id="minutes">10</div>
                <div className="timeBox" id="seconds">00</div>
                <div id="btns">
                    <button className="forAdmin" id="save">Save the set</button>
                    <button className="forAdmin" id="reset">Reset</button>
                </div>            
            </div>
            {/* <span style="margin-left: 20px;">Minutes</span>
            <span style="margin-left: 32px;">Seconds</span> */}
            <br/>
                <button className="forAdmin" id="pause">Start</button>   
        </div>
        <div>
            <span id="boardA"></span>
            <span id="boardB"></span>
        </div>
        {/* </div><br/><br/>  */}
    
        <table id="setTable">
            <thead>
                <tr>
                    <th><span>Set No.</span></th>
                    <th><span>Winner</span></th>
                    <th>
                        <span>Scores (A:B)</span>
                    </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table><br/><br/>
    
        <h2>Team A</h2>
        <button className="forAdmin" id="addA">+</button>
        <table id="tableA">
            <thead>
                <tr>
                    <th><span>JNo.</span></th>
                    <th><span>Player</span></th>
                    <th><span>Score</span></th>
                    <th><span>Points</span></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table><br/><br/>
    
        <h2>Team B</h2>
        <button className="forAdmin" id="addB">+</button>
        <table id="tableB">
            <thead>
                <tr>
                    <th><span>JNo.</span></th>
                    <th><span>Player</span></th>
                    <th><span>Score</span></th>
                    <th><span>Points</span></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
  );
};

export default App;
