import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Diet.module.css';
import Meal from "./components/Meal";

function Diet() {
  const userData = localStorage.getItem('userData');
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then (response => response.json())
      .then(data => {
        setMealData(data)
      })
      .catch(() => {
        console.log("error")
      })

  }

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLinks}>
            <a className={styles.attach} href="https://www.healthifyme.com/blog/category/diet/">Weight Loss</a>
            <a className={styles.attach} href="https://www.healthifyme.com/blog/category/diet/">Diet</a>
            <a className={styles.attach} href="https://www.healthifyme.com/blog/category/health/">Health</a>
            <a className={styles.attach} href="https://www.healthifyme.com/blog/category/success-stories/">Success Stories</a>
            <a className={styles.attach} href="https://www.healthifyme.com/blog/category/workout/">Workout</a>
            <a className={styles.attach} href="https://www.healthifyme.com/blog/category/workout/yoga/">Yoga</a>
            <a className={styles.attach} href="https://www.healthifyme.com/blog/category/diabetes/">Diabetes</a>
          </div>
          <div className={styles.appDownload}>
            <div className={styles.nav}>
              <h5 className={styles.but} 
              onClick={handleBackClick}>Back</h5>
            </div>
            <a className={styles.anchor} 
            href="https://apps.apple.com/in/app/healthifyme-weight-loss-plan/id943712366">
              <img
                className={styles.enteredLazyloaded}
                src="https://www.healthifyme.com/blog/wp-content/uploads/2022/11/Appstore.png"
                alt="app store logo"
                width="16" height="16"
              />
              App Store
            </a>
            <a className={styles.anchor} href="https://play.google.com/store/apps/details?id=com.healthifyme.basic&hl=en_IN&gl=US">
              <img
                src="https://www.healthifyme.com/blog/wp-content/uploads/2022/11/Playstore.png"
                alt="play store logo"
                width="16"
                height="16"
                className={styles.enteredLazyloaded}
              />
              Play Store
            </a>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Best Indian Diet Plan for Weight Loss</h1>

        <img src="https://as1.ftcdn.net/v2/jpg/03/02/45/78/1000_F_302457836_6BKuPrxq04YOQa6dVqLabIcUev5ZIY9F.jpg" alt="Health" className={styles.mainImage} />
        <p className={styles.paara}>
          "Are you looking for the best Indian Diet Plan to lose weight? The rules are simple."
        </p>
       <a href='/contact'> <button className={styles.contactus}>Contact Us</button></a>
        <h2 className={styles.paara}>Thank You</h2>
      </div>

      {error && (
        <div className={styles.error}>{error}</div>
      )}


      {mealData && mealData.nutrients && (
        <>
          <section className={styles.nutrients}>
            <h1 className={styles.deithead}>Macros</h1>
            <ul>
              <li>Calories: {mealData.nutrients.calories.toFixed(0)}</li>
              <li>Carbohydrates: {mealData.nutrients.carbohydrates.toFixed(0)}</li>
              <li>Fat: {mealData.nutrients.fat.toFixed(0)}</li>
              <li>Protein: {mealData.nutrients.protein.toFixed(0)}</li>
            </ul>
          </section>

          <section className={styles.meals}>
            {mealData.meals.map(meal => (
              <Meal key={meal.id} meal={meal} />
            ))}
          </section>
        </>
      )}
      <div className={styles.App}>
        <section className={styles.controls}>
          <input
          className={styles.int}
            type='number'
            placeholder='Calories (e.g. 2000)'
            onChange={handleChange}
          />
          <button className={styles.deitbut} onClick={getMealData}>Get Daily Meal Plan</button>
        </section>
      </div>

      <div className={styles.footer}>
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
          <h2>Our Branches to:</h2>
          <p>Bangalore</p>
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
    </>
  );
}

export default Diet;
