import { useState } from 'react';
import UserProfile from './UserProfile';
import Card from '../UI/Card';
import UserContent from './UserContent';
import CommentsBase from './CommentsBase';
import AllReplies from '../Replies/AllReplies';
import './Comments.css';
import InputForm from '../InputForm/InputForm';

const Comments = props => {
  const [isReplying, setIsReplying] = useState(null);
  const handleReplyClick = id => {
    if (isReplying === id) {
      return setIsReplying(null);
    }

    setIsReplying(id);
  };

  const addNewReply = newReply => {
    props.setContent(prevContent => {
      console.log(prevContent);
      console.log(newReply);
      // return [...prevContent, newReply];
      // console.log(newContent);
    });
  };

  return (
    <div>
      {props.comments.map(comments => (
        <div key={comments.id}>
          <Card className="comments" id={comments.id}>
            <UserProfile
              profilePicture={comments.user.image.png}
              username={comments.user.username}
              curUser={props.curUser}
              createdAt={comments.createdAt}
            />
            <UserContent content={comments.content} />
            <CommentsBase
              id={comments.id}
              onReplyClick={handleReplyClick}
              username={comments.user.username}
              score={comments.score}
              curUser={props.curUser}
            />
          </Card>

          <InputForm
            onAddNew={addNewReply}
            replyingTo={comments.user.username}
            curUser={props.curUser}
            placeholder=""
            button="REPLY"
            class={isReplying === comments.id ? 'add-reply show' : 'add-reply'}
          />

          {comments.replies.length > 0 && (
            <div className="before">
              {comments.replies.map(replies => (
                <AllReplies
                  key={replies.id}
                  replies={replies}
                  curUser={props.curUser}
                  onReplyClick={handleReplyClick}
                  isReplying={isReplying}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comments;
