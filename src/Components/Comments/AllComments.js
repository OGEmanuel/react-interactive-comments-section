import Comments from './Comments';

const AllComments = props => {
  console.log(props.comments);
  return (
    <div>
      <Comments comments={props.comments} />
    </div>
  );
};

export default AllComments;
