import Card from '../UI/Card'
import Button from "../UI/Button";
import "./ErrorMessage.css";


const ErrorMessage = (props) => {
  return (
    <Card>

      <div className="error-message">

        <div className="error-message-header">Invalid User Input</div>

        <div className="error-message-content">{props.message}</div>

      </div>

      <Button type="click">
        Okay
      </Button>
      
      
    </Card>
  );
};

export default ErrorMessage;
