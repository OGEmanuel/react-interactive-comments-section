import ScoreCard from '../UI/ScoreCard';
import './CommentsBase.css';
import minus from './icons/icon-minus.svg';
import plus from './icons/icon-plus.svg';
import reply from './icons/icon-reply.svg';
import del from './icons/icon-delete.svg';
import edit from './icons/icon-edit.svg';

const CommentsBase = props => {
  const handleClick = id => {
    props.onReplyClick(props.id);
  };
  return (
    <div className="base" key={props.id}>
      <ScoreCard>
        <div className="plus-icon">
          <img src={plus} alt="" />
        </div>
        <p className="score">{props.score}</p>
        <div className="minus-icon">
          <img src={minus} alt="" />
        </div>
      </ScoreCard>
      {props.username !== props.curUser.username && (
        <div
          key={props.id}
          onClick={() => handleClick(props.id)}
          id={props.id}
          className="reply-box"
        >
          <div id={props.id} className="reply-icon">
            <img id={props.id} src={reply} alt="" />
          </div>
          <p id={props.id}>Reply</p>
        </div>
      )}
      {props.username === props.curUser.username && (
        <div className="curUser">
          <div className="delete-box">
            <div className="delete-icon">
              <img src={del} alt="" />
            </div>
            <p>Delete</p>
          </div>
          <div className="edit-box">
            <div className="edit-icon">
              <img src={edit} alt="" />
            </div>
            <p>Edit</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsBase;
