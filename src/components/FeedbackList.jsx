import FeedbackItem from "./FeedbackItem";

function FeedbackList({ flist, handleDelete }) {
  if (!flist || flist.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div>
      {flist.map((item) => (
        <FeedbackItem
          key={item.id}
          feedback={item}
          deleteFeedback={handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
