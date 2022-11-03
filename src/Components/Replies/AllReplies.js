import Replies from './Replies';
import RepliesCard from '../UI/RepliesCard';
const AllReplies = props => {
  return (
    <RepliesCard>
      <Replies replies={props.replies} curUser={props.curUser} />
    </RepliesCard>
  );
};

export default AllReplies;
