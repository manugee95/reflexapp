import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import Card from "./components/shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const postHandler = (newFeedBack) => {
    newFeedBack.id = uuid4();
    setFeedback([newFeedBack, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={postHandler} />
                <FeedbackStats fstat={feedback} />
                <FeedbackList flist={feedback} handleDelete={deleteHandler} />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
        <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card>
      </div>
    </Router>
  );
}

export default App;
