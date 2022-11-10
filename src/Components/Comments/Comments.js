import { useState } from 'react';
import UserProfile from './UserProfile';
import Card from '../UI/Card';
import UserContent from './UserContent';
import CommentsBase from './CommentsBase';
import AllReplies from '../Replies/AllReplies';
import './Comments.css';
import InputForm from '../InputForm/InputForm';
import nextId from 'react-id-generator';
import useDateFormat from '../useDateFormat';

const Comments = props => {
  const [isReplying, setIsReplying] = useState(null);
  const [content, setContent] = useState(props.comments.replies);
  const [reply, setReply] = useState('');
  const handleReplyClick = id => {
    if (isReplying === id) {
      return setIsReplying(null);
    }

    setIsReplying(id);
  };

  const newReplies = {
    id: nextId(),
    content: reply,
    createdAt: useDateFormat(new Date()),
    score: 0,
    replyingTo: props.comments.user.username,
    user: {
      image: {
        png: props.curUser.image.png,
      },
      username: props.curUser.username,
    },
  };

  const replyChangeHandler = e => {
    setReply(e.target.value);
  };

  const addNewContent = newContent => {
    setContent(prevContent => {
      console.log(prevContent);

      return [...prevContent, newContent];
    });
  };

  const submitReplyHandler = e => {
    e.preventDefault();
    if (!reply) return;
    addNewContent(newReplies);
    setReply('');
    setIsReplying(null);
  };

  return (
    <div>
      <div key={props.comments.id}>
        <Card className="comments" id={props.comments.id}>
          <UserProfile
            profilePicture={props.comments.user.image.png}
            username={props.comments.user.username}
            curUser={props.curUser}
            createdAt={props.comments.createdAt}
          />
          <UserContent content={props.comments.content} />
          <CommentsBase
            id={props.comments.id}
            onReplyClick={handleReplyClick}
            username={props.comments.user.username}
            score={props.comments.score}
            curUser={props.curUser}
          />
        </Card>

        <InputForm
          state={reply}
          setState={setReply}
          onChange={replyChangeHandler}
          onSubmit={submitReplyHandler}
          curUser={props.curUser}
          placeholder=""
          button="REPLY"
          class={
            isReplying === props.comments.id ? 'add-reply show' : 'add-reply'
          }
        />

        {props.comments.replies.length > 0 && (
          <div className="before">
            {content.map(replies => (
              <AllReplies
                state={reply}
                setState={setReply}
                comments={props.comments}
                // onSubmitHandler={getSubmitHandler}
                // onAddNew={addNew}
                username={props.comments.user.username}
                key={replies.id}
                replies={replies}
                curUser={props.curUser}
                onReplyClick={handleReplyClick}
                // onAddReplies={addReplies}
                isReplying={isReplying}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
