import './UserContent.css';

const UserContent = props => {
  return (
    <div>
      <p className="content">{props.content}</p>
    </div>
  );
};

export default UserContent;
