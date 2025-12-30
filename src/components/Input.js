import React, { Children } from "react";

export default function Input({
  onClick,
  disabled = false,
  className = "",
  placeholder = "",
  required = false,
  children
}) {
  return (
    <input
      onClick={onClick}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
      required={required}
    >
      {children}
    </input>
  );
}
