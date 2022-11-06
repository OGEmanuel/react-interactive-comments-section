import Card from '../UI/Card';
import './InputForm.css';

const InputForm = props => {
  return (
    <Card className={props.class} id={props.id}>
      <form>
        <textarea placeholder={props.placeholder} cols="30" rows="4"></textarea>
        <div className="base">
          <div className="user-photo">
            <img src={props.curUser.image.png} alt="Current user" />
          </div>
          <button>{props.button}</button>
        </div>
      </form>
    </Card>
  );
};

export default InputForm;
