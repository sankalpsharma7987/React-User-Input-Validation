import Card from '../UI/Card'
import "./ErrorMessage.css";


const ErrorMessage = (props) => {
  return (
    <Card>

      <div className="error-message">

        <div className="error-message-header">Invalid User Input</div>

        <div className="error-message-content">{props.message}</div>

      </div>

      <button type="click" className="button">
        Okay
      </button>
      
      
    </Card>
  );
};

export default ErrorMessage;
