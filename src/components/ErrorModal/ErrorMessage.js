import Card from '../UI/Card'
import styles from "./ErrorMessage.module.css";


const ErrorMessage = (props) => {
  return (
    <Card>

      <div className={styles["error-message"]}>

        <div className={styles["error-message-header"]}>Invalid User Input</div>

        <div className={styles["error-message-content"]}>{props.message}</div>

      </div>

      <button type="click" className={styles["button"]}>
        Okay
      </button>
      
      
    </Card>
  );
};

export default ErrorMessage;
