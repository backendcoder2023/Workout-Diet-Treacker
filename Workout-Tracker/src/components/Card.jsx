import React from 'react';
import StopWatch from './Tracker';
import styles from './Card.module.css'

const Card = ({ name, reps, sets, exerciseImage, youtubeVideoLink, exerciseTips, generalFormCues }) => {
  return (

    <div className={styles.back} >
    <div className={styles.gridbox}>
        <div className={styles.wholebox}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.phodiv}>
            <img className={styles.drow} src={exerciseImage} alt={name} />
            <StopWatch className={styles.watch} />
        </div>
        <div className={styles.seconddiv}>
        <a className={styles.vediolink} href={youtubeVideoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
            <p className={styles.para}><b>Reps:</b> {reps}</p>
            <p className={styles.para}><b>Sets:</b> {sets}</p>
            <p className={styles.para}><b> Tips:</b> {exerciseTips}</p>
            <p className={styles.para}><b>Form Cues:</b> {generalFormCues}</p>
        </div>
        </div>
    </div>
    </div>
  );
};

export default Card;