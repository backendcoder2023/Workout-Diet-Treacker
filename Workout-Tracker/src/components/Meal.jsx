import React, { useState, useEffect } from "react"
import styles from './Meal.module.css'

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
    )
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.image)
      })
      .catch(() => {
        console.log("error")
      })
  }, [meal.id])

  return (
    <article>
      <h1 className={styles.mealhead}>{meal.title}</h1>
      <img className={styles.mealimage} src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li><b>Preparation time:</b> {meal.readyInMinutes} minutes</li>
        <li><b>Number of servings:</b> {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}><button className={styles.mealbut}>Go to Recipe</button></a>
    </article>
  )
}