import ErrorMessage from "./ErrorMessage";

import "./ErrorModal.css";

const ErrorModal = (props) => {
  let classes = "error-modal";

  const hideErrorModalHandler = (event) => {

      if(event.target.nodeName==='BUTTON')
      {
        props.onClose();
      }
    
  };

  return (
    <div
      className={props.visible ? `${classes} visible` : `${classes}`}
      onClick={hideErrorModalHandler}
    >
      <ErrorMessage message={props.message}></ErrorMessage>
    </div>
  );
};

export default ErrorModal;
