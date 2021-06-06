import React, { useState } from "react";
import ReactDOM from 'react-dom';

import Card from "./Card";
import ErrorModal from '../ErrorModal/ErrorModal';

import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState(null);
  const[disable,setDisable] = useState(false);

  const submitUserHandler = (e) => {
    e.preventDefault();
    setDisable(true);

    if (enteredName.trim().length > 0 && enteredAge > 1) 
    {
      props.onAddUser(enteredName, enteredAge);
      setDisable(false);
    } 

    else if (!enteredName.trim().length === 0 || !+enteredAge) 
    {
      setError({ message: "Invalid User Input", visible: true });
    } 

    else if (+enteredAge < 1) 
    {
      setError({ message: "Invalid User Age", visible: true });
    }

    setName("");
    setAge("");

  };

  const changeUserName = (event) => {
    setName(event.target.value);
  };

  const changeUserAge = (event) => {
    setAge(event.target.value);
  };

  const closeErrorModalHandler = () => {
    setError(null);
    setDisable(false);
  };

 
  return (
    <React.Fragment>
      
      {error && ReactDOM.createPortal(
        <ErrorModal
          message={error.message}
          visible={error.visible}
          onClose={closeErrorModalHandler}
        />,document.getElementById("modal-root")
      )}

      <Card>

        <form onSubmit={submitUserHandler}>

          <div className={styles["form-controls"]}>

            <label> Username </label>

            <input
              type="text"
              className={styles["form-input"]}
              value={enteredName}
              onChange={changeUserName}
            ></input>

            <label> Age(Years)</label>

            <input
              type="number"
              className={styles["form-input"]}
              value={enteredAge}
              step="1"
              onChange={changeUserAge}
            ></input>

          </div>

          <div className={styles["form-actions"]}>

            <button type="submit" className={styles["button"]} disabled={disable}> Add User </button>

          </div>
          
        </form>

      </Card>
    </React.Fragment>
  );
};

export default UserForm;
