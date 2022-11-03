import './UserContent.css';

const UserContent = props => {
  return (
    <div>
      <p className="content">
        {props.replyingTo && <span>@{props.replyingTo} </span>}
        {props.content}
      </p>
    </div>
  );
};

export default UserContent;
