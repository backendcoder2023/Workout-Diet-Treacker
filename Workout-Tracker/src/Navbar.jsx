import React from 'react';
import logo from './assets/logoh.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <div className="navbar-links">
          <a href="https://www.healthifyme.com/blog/category/diet/">Weight Loss</a>
          <a href="https://www.healthifyme.com/blog/category/diet/">Diet</a>
          <a href="https://www.healthifyme.com/blog/category/health/">Health</a>
          <a href="https://www.healthifyme.com/blog/category/success-stories/">Success Stories</a>
          <a href="https://www.healthifyme.com/blog/category/workout/">Workout</a>
          <a href="https://www.healthifyme.com/blog/category/workout/yoga/">Yoga</a>
          <a href="https://www.healthifyme.com/blog/category/diabetes/">Diabetes</a>
        </div>
        <div class="ml-auto app-download">
        <button>
          <a href="https://apps.apple.com/in/app/healthifyme-weight-loss-plan/id943712366">
          <img class="entered lazyloaded" src="https://www.healthifyme.com/blog/wp-content/uploads/2022/11/Appstore.png" alt="app store logo" width="16" height="16" data-lazy-src="https://www.healthifyme.com/blog/wp-content/uploads/2022/11/Appstore.png" data-ll-status="loaded"></img>
          <noscript>
            <img class="" src="https://www.healthifyme.com/blog/wp-content/uploads/2022/11/Appstore.png" alt="app store logo" width="16" height="16"></img>
          </noscript>
           App Store
          </a>
        </button>
        <button>
          <a href="https://play.google.com/store/apps/details?id=com.healthifyme.basic&hl=en_IN&gl=US">
          <img src="https://www.healthifyme.com/blog/wp-content/uploads/2022/11/Playstore.png" alt="play store logo" width="16" height="16" data-lazy-src="https://www.healthifyme.com/blog/wp-content/uploads/2022/11/Playstore.png" data-ll-status="loaded" class="entered lazyloaded"></img>
          <noscript>
            <img src="https://www.healthifyme.com/blog/wp-content/uploads/2022/11/Playstore.png" alt="play store logo" width="16" height="16"></img>
          </noscript>
           Play Store
          </a>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
