import Card from '../UI/Card';
import './AddComments.css';

const AddComments = props => {
  return (
    <Card className={props.class}>
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

export default AddComments;
