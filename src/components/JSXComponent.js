import React from 'react';

export const JSXComponent = () => {
  return React.createElement(
    "div",
    { id: "myid" },
    React.createElement("h1", null, "hello from JSX component")
  );
};
