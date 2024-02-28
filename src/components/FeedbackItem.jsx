import Card from "./shared/Card";
import { BsXOctagon, BsPencilSquare } from "react-icons/bs";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useAuth } from "../context/AuthContext";

function FeedbackItem({ feedback }) {
  const { deleteHandler, feedbackEdit } = useContext(FeedbackContext);
  const [state, dispatch] = useAuth();

  const isAuthenticated = state.accessToken !== null;

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      {isAuthenticated && (
        <>
          <button className="close" onClick={() => deleteHandler(feedback._id)}>
            <BsXOctagon />
          </button>
          <button className="edit" onClick={() => feedbackEdit(feedback)}>
            <BsPencilSquare />
          </button>
        </>
      )}
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
