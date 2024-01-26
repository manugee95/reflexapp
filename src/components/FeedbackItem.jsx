import Card from "./shared/Card";
import { BsXOctagon, BsPencilSquare } from "react-icons/bs";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feedback }) {
  const {deleteHandler, feedbackEdit} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => deleteHandler(feedback.id)}>
        <BsXOctagon />
      </button>
      <button className="edit" onClick={()=>feedbackEdit(feedback)}>
        <BsPencilSquare />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
