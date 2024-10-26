import React from "react";

type InputProps = {
  name: string;
  type?: string;
  onChange?: (e: any) => void;
  value?: string;
  className?: string;
  onKeyDown?: (e: any) => void;
  disabled?: boolean;
};

const Input = ({
  name,
  type,
  onChange,
  value,
  className,
  onKeyDown,
  disabled,
}: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className={`flex-1 px-3 py-1 border-2 border-grey-300 rounded-3xl ${className}`}
      placeholder={`Enter ${name}`}
    />
  );
};

export default Input;
