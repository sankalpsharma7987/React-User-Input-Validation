import ErrorMessage from "./ErrorMessage";

import  styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {

  const hideErrorModalHandler = (event) => {

      if(event.target.nodeName==='BUTTON')
      {
        props.onClose();
      }
    
  };

  return (
    <div
      className={props.visible ? `${styles["error-modal"]} ${styles["visible"]}` : `${styles["error-modal"]}`}
      onClick={hideErrorModalHandler}
    >
      <ErrorMessage message={props.message}></ErrorMessage>
    </div>
  );
};

export default ErrorModal;
