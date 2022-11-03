import ScoreCard from '../UI/ScoreCard';
import './CommentsBase.css';
import minus from './icons/icon-minus.svg';
import plus from './icons/icon-plus.svg';
import reply from './icons/icon-reply.svg';
const CommentsBase = props => {
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
      <div className="reply-box">
        <div className="reply-icon">
          <img src={reply} alt="" />
        </div>
        <p>Reply</p>
      </div>
    </div>
  );
};

export default CommentsBase;
