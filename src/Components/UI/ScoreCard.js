import './ScoreCard.css';

const ScoreCard = props => {
  const classes = 'score-card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default ScoreCard;
