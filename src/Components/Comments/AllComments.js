import Comments from './Comments';

const AllComments = props => {
  return (
    <div>
      <Comments
        setContent={props.setContent}
        comments={props.comments}
        curUser={props.curUser}
      />
    </div>
  );
};

export default AllComments;
