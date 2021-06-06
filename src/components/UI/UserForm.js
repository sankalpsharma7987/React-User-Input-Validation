import { useState } from "react";

import Card from "./Card";
import ErrorModal from '../ErrorModal/ErrorModal';
import Wrapper from '../Helper/Wrapper';
import Button from "./Button";

import "./UserForm.css";

const UserForm = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState(null);

  const submitUserHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim().length > 0 && enteredAge > 1) 
    {
      props.onAddUser(enteredName, enteredAge);
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
  };

  return (
    <Wrapper>
      
      {error && (
        <ErrorModal
          message={error.message}
          visible={error.visible}
          onClose={closeErrorModalHandler}
        />
      )}

      <Card>
        <form onSubmit={submitUserHandler}>
          <div className="form-controls">
            <label> Username </label>
            <input
              type="text"
              className="form-input"
              value={enteredName}
              onChange={changeUserName}
            ></input>
            <label> Age(Years)</label>
            <input
              type="number"
              className="form-input"
              value={enteredAge}
              step="1"
              onChange={changeUserAge}
            ></input>
            <Button buttonType="submit"> Add User </Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
