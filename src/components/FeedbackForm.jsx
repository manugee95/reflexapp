import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Feedback must be atleast 10 characters long");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedBack = {
        text: text,
        rating: rating
      }

      handleAdd(newFeedBack);

      setText("")
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3 className="how">How would you like to rate our service?</h3>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a Review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled} version={"tertiary"}>
            Submit
          </Button>
          {message && <div>{message}</div>}
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
