import './UserProfile.css';
const UserProfile = props => {
  return (
    <div className="user-profile">
      <div className="user-profile__picture">
        <img src={props.profilePicture} alt="amyrobson" />
      </div>
      <div className="user-profile__info">
        <p className="username">{props.username}</p>
        {props.username === props.curUser.username && (
          <p className="you">you</p>
        )}
        <p className="created-at">{props.createdAt}</p>
      </div>
    </div>
  );
};

export default UserProfile;
