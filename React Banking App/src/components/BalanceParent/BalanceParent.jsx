import { useState } from "react";
import BalanceDisplay from "../BalanceDisplay/BalanceDisplay";
import BalanceInput from "../BalanceInput/BalanceInput";

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
      <BalanceInput onChange={handleChange} />
    </>
  );
}
