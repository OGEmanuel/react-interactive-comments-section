import './RepliesCard.css';

const RepliesCard = props => {
  const classes = 'replies-card';
  return <div className={classes}>{props.children}</div>;
};

export default RepliesCard;
