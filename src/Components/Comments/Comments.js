import { useState } from 'react';
import UserProfile from './UserProfile';
import Card from '../UI/Card';
import UserContent from './UserContent';
import CommentsBase from './CommentsBase';
import AllReplies from '../Replies/AllReplies';
import './Comments.css';
import AddComments from './AddComments';

const Comments = props => {
  const [isReplying, setIsReplying] = useState(false);
  const handleReplyClick = () => {
    setIsReplying(!isReplying);
  };
  return (
    <div>
      {props.comments.map(comments => (
        <div key={comments.id}>
          <Card className="comments">
            <UserProfile
              profilePicture={comments.user.image.png}
              username={comments.user.username}
              curUser={props.curUser}
              createdAt={comments.createdAt}
            />
            <UserContent content={comments.content} />
            <CommentsBase
              onReplyClick={handleReplyClick}
              username={comments.user.username}
              score={comments.score}
              curUser={props.curUser}
            />
          </Card>
          {isReplying && (
            <AddComments
              curUser={props.curUser}
              placeholder=""
              button="REPLY"
              class="add-comments"
            />
          )}
          {comments.replies.length > 0 && (
            <div className="before">
              {comments.replies.map(replies => (
                <AllReplies
                  key={replies.id}
                  replies={replies}
                  curUser={props.curUser}
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
