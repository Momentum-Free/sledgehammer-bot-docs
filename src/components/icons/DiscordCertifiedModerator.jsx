import React from "react";

function DiscordCertifiedModerator({ height = 24, width = 24 }) {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' height={height} width={width}>
        <path
          d='M17.272 3H7.728C7.578 4.939 5.938 6.43 4 6.43v.895c0 4.399 2.088 8.5 5.741 11.407l2.759 2.163 2.759-2.163C18.912 15.9 21 11.724 21 7.325V6.43c-1.939 0-3.504-1.491-3.728-3.43zm-6.487 12.9c-2.237-1.79-3.579-4.325-3.579-7.084v-.522c1.193 0 2.237-.895 2.312-2.088H12.5v11.11z'
          fill='#5865f2'
        />
      </svg>{" "}
      <code>{"DISCORD_CERTIFIED_MODERATOR"}</code>
    </>
  );
}

export default DiscordCertifiedModerator;
