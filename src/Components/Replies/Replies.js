import Card from '../UI/Card';
import UserProfile from '../Comments/UserProfile';
import UserContent from '../Comments/UserContent';
import CommentsBase from '../Comments/CommentsBase';
import './Replies.css';
import AddComments from '../Comments/AddComments';

const Replies = props => {
  return (
    <div>
      <Card className="replies">
        <UserProfile
          profilePicture={props.replies.user.image.png}
          username={props.replies.user.username}
          curUser={props.curUser}
          createdAt={props.replies.createdAt}
        />
        <UserContent
          content={props.replies.content}
          replyingTo={props.replies.replyingTo}
        />
        <CommentsBase
          username={props.replies.user.username}
          curUser={props.curUser}
          score={props.replies.score}
          // onReplyClick={handleReplyClick}
        />
      </Card>
      {props.replies.user.username !== props.curUser.username && (
        <AddComments
          curUser={props.curUser}
          placeholder=""
          button="REPLY"
          class="add-replies"
        />
      )}
    </div>
  );
};

export default Replies;
