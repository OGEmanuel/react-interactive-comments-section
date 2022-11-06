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
  const reply = props.comments.map(comments => comments.replies);
  const replyingTo = reply.map(rep => rep.replyingTo);
  const [isReplying, setIsReplying] = useState(null);
  const [replies, setReplies] = useState(reply);

  // console.log(replies);
  const handleReplyClick = id => {
    if (isReplying === id) {
      return setIsReplying(null);
    }

    setIsReplying(id);
  };

  const replyChangeHandler = e => {
    setReplies(e.target.value);
  };

  const newReplies = {
    id: nextId(),
    content: replies,
    createdAt: useDateFormat(new Date()),
    score: 0,
    replyingTo: replyingTo,
    user: {
      image: {
        png: props.curUser.image.png,
      },
      username: props.curUser.username,
    },
  };

  const submitReplyHandler = e => {
    e.preventDefault();
    if (!replies) return;
    addNewContent(newReplies);
    console.log(newReplies);
    setReplies('');
  };

  const addNewContent = newContent => {
    setReplies(prevContent => {
      return [...prevContent, newContent];
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
            state={replies}
            setState={setReplies}
            onChange={replyChangeHandler}
            onSubmit={submitReplyHandler}
            curUser={props.curUser}
            placeholder=""
            button="REPLY"
            class={isReplying === comments.id ? 'add-reply show' : 'add-reply'}
          />

          {reply.length > 0 && (
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
