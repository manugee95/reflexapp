import { createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const FeedbackContext = createContext(null);

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [state, dispatch] = useAuth();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    const response = await fetch("https://reflextouch-api.onrender.com/api/feedback");
    const data = await response.json();
    setFeedback(data);
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await fetch(`https://reflextouch-api.onrender.com/api/feedback/${id}`, {
        method: "DELETE",
        headers: { "x-auth-token": state.accessToken },
      });

      setFeedback(feedback.filter((item) => item._id !== id));
    }
  };

  const postHandler = async (newFeedBack) => {
    const response = await fetch(`https://reflextouch-api.onrender.com/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": state.accessToken,
      },
      body: JSON.stringify(newFeedBack),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  const feedbackEdit = (fitem) => {
    setEditFeedback({
      item: fitem,
      edit: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`https://reflextouch-api.onrender.com/api/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": state.accessToken,
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item._id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteHandler,
        postHandler,
        feedbackEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
