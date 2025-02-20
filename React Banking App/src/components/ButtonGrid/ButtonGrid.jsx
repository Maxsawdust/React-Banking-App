import InputButton from "../Input button/InputButton";
import "./ButtonGrid.css";

// Stored this in a component to avoid cluttering BalanceParent
export default function ButtonGrid(props) {
  // setModalToDisplay passed in as props so that clicking a button changes the modal respectively
  return (
    <div id="input-wrapper">
      <InputButton
        value="Deposit"
        onClick={() => props.setModalToDisplay("deposit")}
        id="deposit"
      />

      <InputButton
        value="Add Interest as percentage"
        type="choice"
        onClick={() => props.setModalToDisplay("interest")}
        id="custom-interest"
      />

      <InputButton
        value="Add fixed interest (2%)"
        id="fixed-interest"
        onClick={() => props.operateFixed("interest")}
      />

      <InputButton
        value="Widthdraw"
        onClick={() => props.setModalToDisplay("widthdraw")}
        id="widthdraw"
      />

      <InputButton
        value="Charge fixed fees (%10)"
        id="percent-fees"
        onClick={() => props.operateFixed("fees-percent")}
      />

      <InputButton
        value="Charge fixed fees (£100)"
        id="fixed-fees"
        onClick={() => props.operateFixed("fees-standard")}
      />
    </div>
  );
}
