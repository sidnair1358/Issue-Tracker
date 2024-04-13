"use client";
import React, { MouseEventHandler } from "react";

interface Props {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = (props: Props) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${props.containerStyles}`}
      onClick={() => {}}
    >
      <span className="flex-1">{props.title}</span>
    </button>
  );
};

export default CustomButton;
