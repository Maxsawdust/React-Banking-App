import { useRef } from "react";
import "./InputButton.css";

export default function InputButton(props) {
  return (
    <>
      <button
        className="input-button"
        onClick={props.onClick}
        {...(props.id && { id: props.id })}
      >
        {props.value}
      </button>
    </>
  );
}
