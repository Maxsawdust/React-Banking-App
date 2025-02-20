import { useState } from "react";
import BalanceDisplay from "../BalanceDisplay/BalanceDisplay";
import InputButton from "../Input button/InputButton";
import "./BalanceParent.css";
import ModalWindow from "../ModalWindow/ModalWindow";

export default function BalanceParent() {
  const [balance, setBalance] = useState(0);
  const [color, setColor] = useState("red");

  const handleChange = (userInput) => {
    setBalance(userInput);
    setBarColor(userInput);
    console.log(color);
  };

  const setBarColor = (userInput) => {
    let numberBalance = userInput;
    if (numberBalance >= 1000) {
      setColor("green");
    } else if (numberBalance >= 100) {
      setColor("yellow");
    } else if (numberBalance >= 10) {
      setColor("orange");
    } else {
      setColor("red");
    }

    console.log(numberBalance);
  };

  return (
    <>
      <BalanceDisplay balance={balance} color={color} />
      <div id="input-wrapper">
        <InputButton value="Deposit" />
        <ModalWindow hidden={false}>
          Please enter the amount you'd like to deposit
        </ModalWindow>
        <InputButton value="Add Interest" type="choice" />
        <ModalWindow hidden={true} />
        <InputButton value="Widthdraw" />
        <ModalWindow hidden={true} />
        <InputButton value="Charge Bank Fees" type="choice" />
        <ModalWindow hidden={true} />
      </div>
    </>
  );
}
