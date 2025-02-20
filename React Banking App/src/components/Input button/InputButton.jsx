import { useRef } from "react";
import "./InputButton.css";

export default function InputButton(props) {
  const buttonRef = useRef();

  let isDisplayed = false;

  const displayModal = () => {
    props.type == "choice" ? console.log("choice") : console.log("single");
    console.log(buttonRef.current.textContent);
  };

  return (
    <>
      <button ref={buttonRef} className="input-button" onClick={displayModal}>
        {props.value}
      </button>
    </>
  );
}
