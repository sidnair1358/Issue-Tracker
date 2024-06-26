"use client";
import React, { MouseEventHandler } from "react";
import Image from "next/image";

interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={props.btnType || "button"}
      className={`custom-btn ${props.containerStyles} ${props.textStyles}`}
      onClick={props.handleClick}
    >
      <span className="flex-1">{props.title}</span>
      {props.rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={props.rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
