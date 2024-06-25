import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faMedal } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styles from './About.module.css'; 
import aboutImg from '../assets/About.jpg';

const About = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
    navigate(-1);
}
return (
    <>
    <div className={styles.nav}><h3 className={styles.but} onClick={handleBackClick}>Back</h3></div>
    <h1 className={styles.hard}>About Us</h1>
      <section className={styles.about} id="about">
        <div className={styles.aboutContents}>
          <div className={styles.aboutLeftCol}>
            <img className={styles.pick} src={aboutImg} alt="About Us" />
          </div>
          <div className={styles.aboutRightCol}>
            
            <h1  className={styles.bighead}>Best Facilities and Experienced Trainers</h1>
            <p>Healthify is a USDA-sponsored website that offers credible information to help you make healthful eating choices.</p>
            <div className={styles.aboutStates}>
              <div className={styles.aboutState}>
                <FontAwesomeIcon icon={faPerson} />
                <h2>Best Trainers</h2>
              </div>
              <div className={styles.aboutState}>
                <FontAwesomeIcon icon={faMedal} />
                <h2>Award Winning</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.alltext}>
        <p> Healthify serves as a gateway to reliable information on nutrition, healthy eating, physical activity, and food safety for consumers. The site is updated on an ongoing basis by a staff of Registered Dietitians at the Food and Nutrition Information Center (FNIC) located at the National Agricultural Library (NAL), Agricultural Research Service (ARS), U.S. Department of Agriculture (USDA). The website receives content guidance from a working group that consists of scientific experts in food and nutrition within USDA and the U.S. Department of Health and Human Services (HHS).
            Healthify was launched in 2004 as part of the USDA's Obesity Intervention Plan. It is funded by the Research, Education and Economics (REE) mission area of USDA.</p>
        <p>The materials found on this website are not intended to be used for the diagnosis or treatment of a health problem or as a substitute for consulting a licensed health professional. Thank you for visiting Healthify!</p>
        <p><span className={styles.spam}>Link to Healthify:</span> We do allow people/organizations to link to Healthify as it is in the public domain. You may link to the Healthify website without prior permission.</p>
        <h3>External Website Review Criteria:</h3>
        <p>Potential website links will be evaluated and selected using a review process. Reviews will be conducted by subject matter experts: registered dietitian nutritionists or staff with advanced education in nutrition or a related field. To be considered for Healthify, websites must align with all of the specifications listed below. Both Federal and non-federal domains may be evaluated for inclusion on the website, however in the case of nutrition related apps, only Federal domains will be considered.</p>
        <ul>
            <li><span className={styles.spam}>Content -</span> Website content must be presented in an objective, unbiased manner and be consistent with current science and the Dietary Guidelines for Americans. It should align with each of the content guidelines listed below:</li>
            <ol>
                <li>Scope: The subject matter of the site should focus on food, nutrition, physical activity, or food safety.</li>
                <li>Author/Source: The author should be clearly stated, credentialed and reputable. The source of the information on the website should be appropriately referenced and verifiable.</li>
                <li>Timeliness: The website should present current information. Current information includes resources that have been published within the past five years. Some exceptions may apply and are based on the reviewer's discretion.</li>
                <li>Uniqueness: The content should bring new or different perspectives, tools, or resources to the content already available on Healthify.</li>
                <li>Accessibility: Clear and relevant headings and search functionality make the content easily accessible to website users per Section 508 policies.</li>
            </ol>
        </ul>
        <ul>
            <li><span className={styles.spam}>Audience – </span>Material should be geared towards and written for consumers, using plain language and health literacy principles.
            </li>
            <li><span className={styles.spam}>Site Mechanics</span></li>
            <ol>
                <li>Navigation: It should be easy to find information on the site. Headings should be clear and relevant to the information under them.</li>
                <li>Searchability: The site should have search capability that produces accurate results (unless it is a very small site or link will be to a specific document such as a brochure or fact sheet).</li>
                <li>Contact Information: Contact information must be available for communication with the owner of the site (i.e. comments section, email address, mailing address, telephone number).</li>
                <li>Personal Information: If the user's personal information is requested, the site should explain exactly how the information will and will not be used. Privacy policy should be clearly visible.</li>
            </ol>
        </ul>
        <ul>
            <li><span className={styles.spam}>Advertisements, Products, and Services -</span> The goal of Healthify is to connect consumers with credible nutrition information that is consistent with current science and the most recent edition of the Dietary Guidelines for Americans. Education must be the primary intent, rather than persuasion, conversion, or sales. Advertisements for products and services should be minimal and clearly differentiated from the information content. They should not detract from or conflict with web content. Content must provide an aspect of nutrition that is accurate, substantive, unique, credible and objective.</li>
            <li><span className={styles.spam}>Additional Features</span></li>
            <ol>
                <li>Graphics and Layout: Graphics, illustrations and other multimedia designs should enhance the site and load within a reasonable length of time. They should not distract the user or substitute for content.</li>
                <li>Software and Hardware: The site should incorporate appropriate use of graphics, audio and/or video. If use of special plug-ins or programs is required they must be available on the site with clear and easy instructions.</li>
            </ol>
        </ul>
    
        
      </div>

    </>
  );
}

export default About;

