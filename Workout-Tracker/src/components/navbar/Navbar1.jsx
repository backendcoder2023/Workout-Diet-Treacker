import { Link } from 'react-router-dom';
import styles from './Navbar1.module.css';


const Navbar1 = () => {
  // const handleClear = () => {
  //   localStorage.removeItem('userData');
  //   window.location.reload();
  // }


  return (
    <>
      <div className={styles.navbarParent}>
        <img className={styles.navbarLogo} src='https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/49/a1/75/49a17564-15be-0e13-4c70-b7d29316ec44/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/434x0w.webp'></img>
      
        <a className={styles.area} href={"/"}> <div className={styles.navbarTitle} >WORKOUT TRACKER</div></a>
        <div className={styles.bDiv}>
          {/* <button className={styles.navbarButton} onClick={handleClear}>LogOut</button> */}
          <div className={styles.navbarLinks}>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};



export default Navbar1;
