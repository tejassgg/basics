import React, { Children } from "react";

export default function Input({
  onClick,
  disabled = false,
  className = "",
  placeholder = "",
  children
}) {
  return (
    <input
      onClick={onClick}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
    >
      {children}
    </input>
  );
}
