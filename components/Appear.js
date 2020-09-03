/*
Wraps the rendered element in hidden styling.
The useAppearSequence hook modifies the visibility of this component directly.
*/
import React from "react";

export default function Appear({ order, ...props }) {
  return (
    <span
      {...props}
      className="invisible"
      data-appear="false"
      data-appear-order={order}
    />
  );
}
