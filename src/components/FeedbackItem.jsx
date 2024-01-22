import Card from "./shared/Card";
import { BsXOctagon } from "react-icons/bs";

function FeedbackItem({ feedback, deleteFeedback }) {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => deleteFeedback(feedback.id)}>
        <BsXOctagon />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
