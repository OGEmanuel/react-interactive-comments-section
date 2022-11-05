import ScoreCard from '../UI/ScoreCard';
import './CommentsBase.css';
import minus from './icons/icon-minus.svg';
import plus from './icons/icon-plus.svg';
import reply from './icons/icon-reply.svg';
import del from './icons/icon-delete.svg';
import edit from './icons/icon-edit.svg';

const CommentsBase = props => {
  const handleClick = e => {
    props.onReplyClick(e.target);
  };
  return (
    <div className="base">
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
        <div onClick={handleClick} className="reply-box">
          <div className="reply-icon">
            <img src={reply} alt="" />
          </div>
          <p>Reply</p>
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
