import Comments from './Comments';
import nextId from 'react-id-generator';

const AllComments = props => {
  return (
    <div>
      {props.comments.map(comments => (
        <Comments
          key={nextId()}
          setContent={props.setContent}
          comments={comments}
          curUser={props.curUser}
        />
      ))}
    </div>
  );
};

export default AllComments;
