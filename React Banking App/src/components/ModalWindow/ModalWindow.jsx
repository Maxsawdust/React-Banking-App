import { useState } from "react";
import "./ModalWindow.css";

export default function ModalWindow(props) {
  const [isHidden, setIsHidden] = useState(true);

  if (!props.hidden) {
    return (
      <div className="modal-window">
        <form className="modal-form">
          <input placeholder=" " className="modal-input" />
          <span className="label">{props.children}</span>
          <button>Submit</button>
        </form>

        <button className="close-button">
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
    );
  }

  return <></>;
}
