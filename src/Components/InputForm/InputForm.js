import { useState } from 'react';
import Card from '../UI/Card';
import './InputForm.css';
import nextId from 'react-id-generator';
import useDateFormat from '../useDateFormat';

const InputForm = props => {
  const [comment, setComment] = useState('');

  const commentChangeHandler = e => {
    setComment(e.target.value);
  };

  const newComment = {
    id: nextId(),
    content: comment,
    createdAt: useDateFormat(new Date()),
    score: 0,
    user: {
      image: {
        png: props.curUser.image.png,
      },
      username: props.curUser.username,
    },
    replies: [],
  };

  const newReply = {
    id: nextId(),
    content: comment,
    createdAt: useDateFormat(new Date()),
    score: 0,
    replyingTo: props.replyingTo,
    user: {
      image: {
        png: props.curUser.image.png,
      },
      username: props.curUser.username,
    },
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!newComment.content) return;
    if (!newReply.content) return;

    const addComment = newComment;
    const addReply = newReply;
    props.onAddNew(addComment || addReply);
    setComment('');
  };

  return (
    <Card className={props.class} id={props.id}>
      <form onSubmit={submitHandler}>
        <textarea
          placeholder={props.placeholder}
          cols="30"
          rows="4"
          onChange={commentChangeHandler}
          value={comment}
        ></textarea>
        <div className="base">
          <div className="user-photo">
            <img src={props.curUser.image.png} alt="Current user" />
          </div>
          <button type="submit">{props.button}</button>
        </div>
      </form>
    </Card>
  );
};

export default InputForm;
