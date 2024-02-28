import PropTypes from "prop-types";
import Button from "./shared/Button";
import { useAuth } from "../context/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";

function Header({ text, bgColor, textColor }) {
  const [state, dispatch] = useAuth()
  const {deleteItem} = useLocalStorage("x-auth-token")

  const isAuthenticated = state.accessToken !== null

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign: "center",
  };

  function logout(){
    deleteItem()
    dispatch({type: "setToken", payload: null})
  }

  return (
    <div style={headerStyles}>
      <h2>{text}</h2>
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </div>
  );
}

Header.defaultProps = {
  text: "ReflexTouch",
  bgColor: "purple",
  textColor: "yellow"
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
