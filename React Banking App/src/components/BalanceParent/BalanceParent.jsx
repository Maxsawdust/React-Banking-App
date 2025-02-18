import { useState } from "react";
import BalanceDisplay from "../BalanceDisplay/BalanceDisplay";

export default function BalanceParent() {
  // storing emojis in object for better ease of use/readability.
  const emojis = {
    shocked: "😱",
    worried: "😨",
    sad: "😔",
    happy: "🙂",
    ecstatic: "😍",
  };

  return <BalanceDisplay emoji={emojis.sad} color="red" />;
}
