import React from "react";

function BugHunterLevel1({ height = 24, width = 24 }) {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' height={height} width={width}>
        <path
          d='M16.582 2.638s7.672 5.236 4.757 12.589c-2.915 7.352-8.714 5.313-6.547 3.165 2.167-2.149-2.557-3.606-5.581-6.394l7.365-9.36'
          fill='#3ba55c'
        />
        <path
          d='M16.116 9.837c-1.618 2.059-3.9 3.088-5.665 2.717L4.294 20.4a1.279 1.279 0 0 1-1.796.218 1.279 1.279 0 0 1-.224-1.803l6.125-7.832c-.812-1.624-.365-4.111 1.278-6.19 2.04-2.582 5.115-3.548 6.899-2.154 1.784 1.394 1.566 4.616-.46 7.2z'
          fill='#b4e1cd'
        />
      </svg>{" "}
      <code>{"BUGHUNTER_LEVEL_1"}</code>
    </>
  );
}

export default BugHunterLevel1;
