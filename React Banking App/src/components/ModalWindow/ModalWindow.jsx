import { useRef, useState } from "react";
import validateInput from "./validateInput";
import "./ModalWindow.css";

export default function ModalWindow(props) {
  const [alertMessage, setAlertMessage] = useState("");
  // using ref to get the form element
  const inputRef = useRef(null);

  // handler function to take care of form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // getting the input's value from ref
    const value = inputRef.current.value;

    // calling a function to make sure the input only contains numbers
    if (!validateInput(value)) {
      setAlertMessage("Please make sure to only enter numbers.");
      return;
    }

    setAlertMessage("");

    // calling the onSubmit function passed in from props
    props.onSubmit(value);
  };

  // making sure that the modal won't display unless there is a modal to display
  if (!props.displayModal) return null;

  return (
    <div className="modal-background">
      <div className="modal-window">
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="alert-container">
            <input placeholder=" " className="modal-input" ref={inputRef} />
            <span className="label">{props.children}</span>
            <span className="alert">{alertMessage}</span>
          </div>
          <button className="submit-button">Submit</button>
        </form>

        <button
          className="close-button"
          onClick={() => {
            props.setModalToDisplay(null);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
