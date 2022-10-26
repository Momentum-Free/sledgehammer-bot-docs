import React from "react";

function EarlyVerifiedBotDeveloper({ height = 24, width = 24 }) {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' height={height} width={width}>
        <path
          d='M21.58 11.4 17.3 4.01l-.35-.6H7.04l-.35.6-4.27 7.39-.35.6.35.6 4.27 7.39.35.6h9.92l.35-.6 4.28-7.39.35-.6zM8.51 10.37 6.88 12l1.63 1.63v2.73L4.15 12l4.37-4.37v2.74zm3.12 6.93-2.04-.63 3.1-9.98 2.04.64zm3.86-.93v-2.73L17.12 12l-1.63-1.63V7.63L19.85 12z'
          fill='#3e70dd'
        />
      </svg>{" "}
      <code>{"EARLY_VERIFIED_BOT_DEVELOPER"}</code>
    </>
  );
}

export default EarlyVerifiedBotDeveloper;
