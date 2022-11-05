import Comments from './Comments';

const AllComments = props => {
  return (
    <div>
      <Comments comments={props.comments} curUser={props.curUser} />
    </div>
  );
};

export default AllComments;
