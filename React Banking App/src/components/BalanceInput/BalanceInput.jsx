export default function BalanceInput(props) {
  return (
    <input type="number" onChange={(e) => props.onChange(e.target.value)} />
  );
}
