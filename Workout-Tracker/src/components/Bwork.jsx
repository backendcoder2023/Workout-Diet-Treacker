import styles from './Bwork.module.css'
function Bwork({ text, handleClick }) {
    return (
   <>


      <button onClick={handleClick} className={styles.time}>
        {text}
      </button>
      </>
    );
  }
  
  export default Bwork;