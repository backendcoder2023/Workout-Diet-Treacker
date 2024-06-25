import React from 'react'
import  { useState } from 'react';

import styles from './Contact.module.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const navigate = useNavigate();
    const handleBackClick = () => {
    navigate(-1);
    }
    const handleNextStep = (e) => {
        e.preventDefault();
        if (name && email) {
          setStep(step + 1);
        } else {
          alert('Name and Email are required');
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Feedback submitted: ' + feedback);
      };
    
    
  return (
    <>
        <div className={styles.nav}><h3 className={styles.but} onClick={handleBackClick}>Back</h3></div>
        <section className={styles.pricing} >
        <header className={styles.sectionHeader}>
            <h3>Contact Us</h3>
            <h1>Join Suitable Plan</h1>
            <p>Choose your Favourate</p>
        </header>
        <div className={styles.pricingContents}>
            <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
                <span className={styles.pricingCardTitle}>Silver</span>
                <div className={styles.priceCircle}>
                <span className={styles.price}><i>$</i>12.99</span>
                <span className={styles.desc}>/ Month</span>
                </div>
            </div>
            <div className={styles.pricingCardBody}>
                <ul>
                <li><FontAwesomeIcon icon={faCheck} /> 15 Body Building</li>
                <li><FontAwesomeIcon icon={faCheck} /> 10 Boxing Classes</li>
                <li><FontAwesomeIcon icon={faCheck} /> 5 Massage</li>
                <li><FontAwesomeIcon icon={faCheck} /> 12 Swimming Sessions</li>
                </ul>
                <button className={`${styles.btn} ${styles.pricePlanBtn}`}>Select Plan</button>
            </div>
            </div>
            <div className={`${styles.pricingCard} ${styles.recommended}`}>
            <div className={styles.pricingCardHeader}>
                <span className={styles.pricingCardTitle}>Gold</span>
                <div className={styles.priceCircle}>
                <span className={styles.price}><i>$</i>36.99</span>
                <span className={styles.desc}>/ Month</span>
                </div>
            </div>
            <div className={styles.pricingCardBody}>
                <ul>
                <li><FontAwesomeIcon icon={faCheck} /> 15 Body Building</li>
                <li><FontAwesomeIcon icon={faCheck} /> 10 Boxing Classes</li>
                <li><FontAwesomeIcon icon={faCheck} /> 5 Massage</li>
                <li><FontAwesomeIcon icon={faCheck} /> 12 Swimming Sessions</li>
                </ul>
                <button className={`${styles.btn} ${styles.pricePlanBtn}`}>Select Plan</button>
            </div>
            </div>
            <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
                <span className={styles.pricingCardTitle}>Platinum</span>
                <div className={styles.priceCircle}>
                <span className={styles.price}><i>$</i>74.99</span>
                <span className={styles.desc}>/ Month</span>
                </div>
            </div>
            <div className={styles.pricingCardBody}>
                <ul>
                <li><FontAwesomeIcon icon={faCheck} /> 15 Body Building</li>
                <li><FontAwesomeIcon icon={faCheck} /> 10 Boxing Classes</li>
                <li><FontAwesomeIcon icon={faCheck} /> 5 Massage</li>
                <li><FontAwesomeIcon icon={faCheck} /> 12 Swimming Sessions</li>
                </ul>
                <button className={`${styles.btn} ${styles.pricePlanBtn}`}>Select Plan</button>
            </div>
            </div>
        </div>
        </section>
        <div className={styles.bigboss}>
        <div className={styles.contect}  id="contact_page">
                <a ><p className={styles.title} >CONTACT</p></a>
                <p className={styles.subtitle}>Fan? Drop a note!</p>
            <div className={styles.contectCan}>
                <div className={styles.contectDetails }>
                    <h3 className={styles.emoji}>&#10082; India</h3>
                    <h3 className={styles.emoji}>&#9990; Phone: +91 6574380</h3>
                    <h3 className={styles.emoji}>&#9993; Email:mail@mail.com</h3>
                </div>
                <div className={styles.inputDetails}>
                        
                        <input type="text" className={styles.inp} placeholder="Name"></input>
                        <input type="text" className={styles.inp} placeholder="Email"></input>
                        <input type="text" className={styles.bigInput} placeholder="Message"></input>
                    <div>
                    <button className={styles.buttonBtn}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <div className={styles.onebox}>
      <div className={styles.twobox}>
        {step === 1 && (
          <form onSubmit={handleNextStep}>
            <h2 className={styles.oneheading}>Fill the feedback form</h2>
            <div className={styles.thirdone}>
              <label className={styles.onelabel} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className={styles.oneinput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className={styles.twolabel} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={styles.oneinput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.forbox}>
              <button
                type="submit"
                className={styles.onebut}
              >
                Next
              </button>
            </div>
          </form>
        )}
         {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div className={styles.fivebox}>
              <label className={styles.twolabel} htmlFor="feedback">
                Feedback
              </label>
              <textarea
                id="feedback"
                className={styles.gogo}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
            <div className={ styles.sixbox}>
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className={styles.onebut}
              >
                Back
              </button>
               <button
                type="submit"
                className={styles.onebut}
                
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
    </>
  )
}

export default Contact;
