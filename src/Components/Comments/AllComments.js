import Comments from './Comments';

const AllComments = props => {
  console.log(props.curUser);
  return (
    <div>
      <Comments comments={props.comments} curUser={props.curUser} />
    </div>
  );
};

export default AllComments;
