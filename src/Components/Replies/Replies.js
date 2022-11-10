import Card from '../UI/Card';
import UserProfile from '../Comments/UserProfile';
import UserContent from '../Comments/UserContent';
import CommentsBase from '../Comments/CommentsBase';
import './Replies.css';
import InputForm from '../InputForm/InputForm';

const Replies = props => {
  return (
    <div>
      <Card className="replies" id={props.replies.id}>
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
          id={props.replies.id}
          username={props.replies.user.username}
          curUser={props.curUser}
          score={props.replies.score}
          onReplyClick={props.onReplyClick}
        />
      </Card>
      {props.replies.user.username !== props.curUser.username && (
        <InputForm
          // state={replies}
          // setState={setReplies}
          // onChange={replyChangeHandler}
          // onSubmit={submitReplyHandler}
          curUser={props.curUser}
          placeholder=""
          button="REPLY"
          class={
            props.isReplying === props.replies.id
              ? 'add-replies show'
              : 'add-replies'
          }
        />
      )}
    </div>
  );
};

export default Replies;
