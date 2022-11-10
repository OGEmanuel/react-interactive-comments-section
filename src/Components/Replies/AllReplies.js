import Replies from './Replies';
import RepliesCard from '../UI/RepliesCard';
const AllReplies = props => {
  return (
    <RepliesCard>
      <Replies
        username={props.username}
        ID={props.ID}
        replies={props.replies}
        curUser={props.curUser}
        onReplyClick={props.onReplyClick}
        isReplying={props.isReplying}
      />
    </RepliesCard>
  );
};

export default AllReplies;
