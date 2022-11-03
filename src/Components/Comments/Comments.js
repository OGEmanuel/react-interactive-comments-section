import UserProfile from './UserProfile';
import Card from '../UI/Card';
import UserContent from './UserContent';
import CommentsBase from './CommentsBase';
const Comments = props => {
  return (
    <div>
      {props.comments.map(comments => (
        <Card className="comments" key={comments.id}>
          <UserProfile
            profilePicture={comments.user.image.png}
            username={comments.user.username}
            createdAt={comments.createdAt}
          />
          <UserContent content={comments.content} />
          <CommentsBase score={comments.score} />
        </Card>
      ))}
    </div>
  );
};

export default Comments;
