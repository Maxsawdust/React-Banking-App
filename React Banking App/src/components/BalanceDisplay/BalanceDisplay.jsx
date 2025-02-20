import { useEffect, useState } from "react";
import "./BalanceDisplay.css";

export default function BalanceDisplay(props) {
  // getting the balance from the BalanceParent component
  const balance = Number(props.balance) || 0;
  const [displayEmoji, setDisplayEmoji] = useState("😔");

  // map for emojis and the balance thresholds they should be displayed at
  /* I like this approach because it removes if...else & switch...case statements, 
     and also makes maintenance easier */
  const EMOJIS = [
    { threshold: -1000, emoji: "💀" },
    { threshold: -100, emoji: "😱" },
    { threshold: 0, emoji: "😨" },
    { threshold: 10, emoji: "😔" },
    { threshold: 100, emoji: "🙂" },
    { threshold: 1000, emoji: "😄" },
    { threshold: Infinity, emoji: "😍" },
  ];

  // using effect to change the emoji as the balance changes
  useEffect(() => {
    /* destructuring object to access threshold and getting the object where the 
       balance is below the threshold */
    const emojiSetting = EMOJIS.find(({ threshold }) => balance < threshold);
    setDisplayEmoji(emojiSetting.emoji);
  }, [balance]);

  return (
    <header id="balance-display">
      <h1 id="balance-heading">Current Balance</h1>
      <div id="balance-wrapper" className="relative">
        <span id="balance-currency">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M240-120v-80l16.5-10q16.5-10 36-29.5t35.5-50q16-30.5 16-70.5 0-11-1.5-21t-3.5-19h-99v-80h60q-21-33-40.5-69.5T240-640q0-92 64-156t156-64q71 0 126 39t79 101l-74 31q-15-40-50.5-65.5T460-780q-58 0-99 41t-41 99q0 48 24 80t49 80h167v80H421q2 9 2.5 19t.5 21q0 50-17.5 90T364-200h196q40 0 61-21t29-54l70 35q-11 55-56.5 87.5T560-120H240Z" />
          </svg>
        </span>
        <span
          className="balance relative"
          id="balance-amount"
          style={{ "--balance-bar-color": props.color }}
        >
          {balance}
        </span>
        <span className="balance" id="balance-emoji">
          {displayEmoji}
        </span>
      </div>
    </header>
  );
}
