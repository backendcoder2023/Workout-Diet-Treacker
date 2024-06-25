import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import BannerImage from '../../assets/banner.jpg';

const Landing = () => {
  const handleClear = () => {
    localStorage.removeItem('userData');
    window.location.reload();
  }

  return (
    <>
      <div className={styles.nav}>
        <div>
          <img 
            className={styles.photo} 
            src='data:image/png;base64,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' 
            alt="Logo"
          />
        </div>
        <div className={styles.point}>
          <Link className={styles.pa} to="/">Home</Link>
          <Link className={styles.pa} to="/about">About</Link>
          <Link className={styles.pa} to="/workout">Workout</Link>
          <Link className={styles.pa} to="/diet">Diet</Link> 
          <Link className={styles.pa} to="/contact">Contact</Link>
        </div>
        <div>
          <button className={styles.navbarButton} onClick={handleClear}>LogOut</button>
        </div>
      </div>
      <div className={styles.imagebox}>
        <img className={styles.image} src={BannerImage} alt="Banner" />
        <div className={styles.textOverlay}>Feel The Power With</div>
        <div className={styles.bigtext}>
          <h1 className={styles.heal}><span>HEA</span>LTHIFY</h1>
        </div>
      </div>
      <h3 className={styles.line}><i><marquee>Your Body Can Stand Almost Anything… it's just your mind you have to convince.” ... Helping clients realize that their body is strong enough, good enough, and ...🏋‍♀🏋</marquee></i></h3>
      <div className={styles.footer} >
        <div className={styles.txt}>
            <h2>Main Branch</h2>
            <p>© 2024 Bundl Delhi </p>
            <p>Healthify Gym </p>
        </div>
        <div className={styles.txt}>
            <h2>About US</h2>
            <p>Facility</p>
            <p>Service</p>
            <p>Trainers</p>
            <p>Feedback</p>
            
        </div>
        <div className={styles.txt}>
            <h2>Our Branchs to:</h2>
            <p>Banglore</p>
            <p>Gurugram</p>
            <p>Delhi NCR</p>
            <p>Pune</p>
            <p>Hyderabad</p>
            <p>Haryana</p>
            
        </div>
        <div className={styles.txt}>
            <h2>Workout Center</h2>
            <p>About</p>
            <p>Team</p>
            <p>Terms & Conditions</p>

        </div>
    </div>
    <div className={styles.icon}>
      <p>
        <a href="https://www.facebook.com/login/" className={`${styles.fa} fa-facebook`}></a>
        <a href="https://www.instagram.com/accounts/login/" className={`${styles.fa} fa-instagram`}></a>
        <a href="https://accounts.snapchat.com/accounts/v2/login" className={`${styles.fa} fa-snapchat`}></a>
        <a href="https://in.pinterest.com/login/" className={`${styles.fa} faPinterest-p`}></a>
        <a href="https://twitter.com/i/flow/login" className={`${styles.fa} fa-twitter`}></a>
        
      </p>

      <p>
        <p>Created By <span className={styles.scan}>Five Star Tutorials</span> All Rights Reserved</p>
      </p>
    </div>
    
    </>
  );
}

export default Landing;




