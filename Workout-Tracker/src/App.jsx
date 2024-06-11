import React from 'react';
import Navbar from './Navbar';
import './App.css';
import healthImage from './assets/health.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <span class="Healthy"> Diet</span>
        <h1>Best Indian Diet Plan for Weight Loss</h1>
        <img 
          className="img-fluid" 
          src="https://secure.gravatar.com/avatar/96e8d08f1339095d941a0841c335d3b5?s=96&d=mm&r=g" 
          alt="Gravatar" 
        />
        <div class="by_post_name">
          <p class="post_user_name">
          <b>Dhanashri Nimbhorkar</b>
          </p>
          <p class="post_p_date">June 11, 2024</p>
        </div>
        <img src={healthImage} alt="Health" className="main-image" />
        <div class="mt-4 pos_des">
          <p> </p>
          <p>
            "Are you looking for the best Indian Diet Plan to lose weight? The rules are simple.&nbsp;"
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
