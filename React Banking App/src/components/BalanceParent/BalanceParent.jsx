import { useState, useEffect } from "react";
import BalanceDisplay from "../BalanceDisplay/BalanceDisplay";
import "./BalanceParent.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import ButtonGrid from "../ButtonGrid/ButtonGrid";

export default function BalanceParent() {
  // using state to control variables that need to change
  const [balance, setBalance] = useState(0);
  const [color, setColor] = useState("red");
  const [modalToDisplay, setModalToDisplay] = useState(null);

  // using maps to store information as to avoid repetetive use of conditional statements
  const COLORS = [
    { threshold: 10, color: "red" },
    { threshold: 100, color: "orange" },
    { threshold: 1000, color: "yellow" },
    { threshold: Infinity, color: "green" },
  ];
  const MODAL_MESSAGES = {
    deposit: "Please enter the amount you'd like to deposit",
    interest: "Please enter a percentage of interest to add",
    withdraw: "Please enter the amount you'd like to withdraw",
  };

  const BALANCE_OPERATIONS = {
    deposit: (amount) => Number((balance + amount).toFixed(2)),
    interest: (amount) => Number((balance * (1 + amount / 100)).toFixed(2)),
    widthdraw: (amount) => Number((balance - amount).toFixed(2)),
  };

  const FIXED_OPERATIONS = {
    interest: () => Number((balance * 1.2).toFixed(2)),
    "fees-percent": () => Number((balance * 0.9).toFixed(2)),
    "fees-standard": () => Number((balance - 100).toFixed(2)),
  };

  useEffect(() => {
    const colorSetting = COLORS.find(({ threshold }) => balance < threshold);
    setColor(colorSetting.color);
  }, [balance]);

  // function that displays label message depending on which button is pressed
  const getModalContent = (type) => MODAL_MESSAGES[type];

  // function that handles the mathematical operation needed depending on user input
  // value is passed in through the ModalWindow component
  const handleModalSubmit = (value) => {
    const amount = Number(value);
    // searching the BALANCE_OPERATIONS map for the modalToDisplay value
    const operation = BALANCE_OPERATIONS[modalToDisplay];
    // calling the function stored in the BALANCE_OPERATIONS map
    setBalance(operation(amount));
    // setting this to null to close the modal on submission
    setModalToDisplay(null);
  };

  // function to perform the sums of the buttons that don't require input.
  const performFixedSums = (type) => {
    if (balance <= 0 && type !== "fees-standard") {
      alert("balance is too low for this operation.");
      return;
    }
    const operation = FIXED_OPERATIONS[type];
    setBalance(operation());
  };

  return (
    <>
      <BalanceDisplay balance={balance} color={color} />
      <ButtonGrid
        setModalToDisplay={setModalToDisplay}
        operateFixed={performFixedSums}
      />
      <ModalWindow
        displayModal={modalToDisplay}
        setModalToDisplay={setModalToDisplay}
        onSubmit={handleModalSubmit}
      >
        {getModalContent(modalToDisplay)}
      </ModalWindow>
    </>
  );
}
